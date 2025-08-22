// useDraggable.js

import { ref, onBeforeUnmount, watch, onMounted } from 'vue';

export default function useDraggable(props: { top: any }, showModal: () => void) {
    const currentTop = ref(0);
    const isDragging = ref(false);   // 是否正在拖拽
    const startX = ref(0);           // 鼠标按下时的X坐标
    const initialX = ref(0);         // 元素初始X坐标
    const initialY = ref(0);
    const dragElement = ref<any>(null);

    watch(() => props.top, (newVal) => {
        currentTop.value = newVal;
    }, { immediate: true });

    // 获取元素的初始位置
    const getPosition = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top
        };
    };

    // 限制拖拽元素在屏幕内
    const constrainToScreen = (clientX: number, clientY: number, el: HTMLElement) => {
        const { innerWidth, innerHeight } = window;
        const elRect = el.getBoundingClientRect();

        const constrainedX = Math.min(Math.max(clientX, 0), innerWidth - elRect.width);
        const constrainedY = Math.min(Math.max(clientY, 0), innerHeight - elRect.height);

        return { x: constrainedX, y: constrainedY };
    };

    // 鼠标移动时的处理函数
    const onMouseMove = (e: MouseEvent, el: HTMLElement) => {
        if (!isDragging.value) return;

        e.preventDefault();  // 阻止默认行为
        e.stopPropagation(); // 阻止事件冒泡

        // 移动的时候yqg-permission-tooltip隐藏
        const tooltip = document.querySelector('.yqg-permission-tooltip') as HTMLElement;
        if (tooltip) {
            tooltip.style.display = 'none';
        }

        const { clientX, clientY } = e;
        const { x, y } = constrainToScreen(clientX - startX.value + initialX.value, clientY - currentTop.value + initialY.value, el);

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

    };

    // 鼠标松开时的处理函数
    const onMouseUp = (e: MouseEvent, el: HTMLElement) => {
        if (!isDragging.value) return;

        // 阻止点击事件触发
        e.preventDefault();  // 阻止默认行为
        e.stopPropagation(); // 阻止事件冒泡

        // 卸载拖拽
        isDragging.value = false;
        // 清除事件监听
        document.removeEventListener('mousemove', (e) => onMouseMove(e, el));
        document.removeEventListener('mouseup', (e) => onMouseUp(e, el));

        // // 获取元素当前的位置
        const { x: currentX, y: currentY } = getPosition(el);
        if ( Math.abs(currentY - initialY.value) < 10 && Math.abs(currentX - initialX.value) < 10) {
            showModal();

            return;
        }

        const { clientY } = e;
        // 在鼠标松开时设置x为初始位置，y为鼠标当前位置
        const { x, y } = constrainToScreen(initialX.value, clientY - currentTop.value + initialY.value, el);
        el.style.transition = 'all 0.3s';
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
    };

    // 鼠标按下时的处理函数
    const onMouseDown = (e: MouseEvent, el: HTMLElement) => {
        isDragging.value = true;

        // 阻止点击事件触发
        e.preventDefault();  // 阻止默认行为
        e.stopPropagation();

        // 获取鼠标按下时的位置
        startX.value = e.clientX;
        currentTop.value = e.clientY;


        // 获取元素的初始位置
        const { x, y } = getPosition(el);
        initialX.value = x;
        initialY.value = y;
        el.style.transition = 'none';

        // 添加鼠标移动和鼠标松开事件监听
        document.addEventListener('mousemove', (e) => onMouseMove(e, el));
        document.addEventListener('mouseup', (e) => onMouseUp(e, el));
    };

    // 返回拖拽的绑定方法
    const bindDraggable = () => {
        onMounted(() => {
            const el = dragElement.value?.$el;
            if (el) {
                el.addEventListener('mousedown', (e: MouseEvent) => onMouseDown(e, el));
            }
        });

        onBeforeUnmount(() => {
            const el = dragElement.value?.$el;
            if (el) {
                el.removeEventListener('mousedown', (e: MouseEvent) => onMouseDown(e, el));
            }
        });
    };

    bindDraggable();

    return {
        currentTop,
        dragElement,
    };
}
