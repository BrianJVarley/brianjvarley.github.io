export declare function useLoadingAnimation(): {
    sectionMotion: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
        };
        transition: {
            duration: number;
        };
    };
    loadingStateMotion: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
        };
        transition: {
            delay: number;
            duration: number;
        };
    };
    loadingTextMotion: {
        animate: {
            scale: number[];
        };
        transition: {
            duration: number;
            repeat: number;
            ease: "easeInOut";
        };
    };
    loadingDotAnimate: {
        y: number[];
        opacity: number[];
    };
    getLoadingDotTransition: (index: number) => {
        duration: number;
        repeat: number;
        delay: number;
        ease: "easeInOut";
    };
};
