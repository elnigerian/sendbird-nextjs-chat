
export const defaultTandemLogoWidth = '104.26';
export const defaultTandemLogoHeight = '25';
export const defaultTandemLogoFill = 'none';

export const TandemLogo = (props: any) => {
    const { width, height, fill } = props;
    const logoWidth = width ? width : defaultTandemLogoWidth;
    const logoHeight = height ? height : defaultTandemLogoHeight;
    const logoFill = fill ? fill : defaultTandemLogoFill;
    return (
        <svg width={logoWidth} height={logoHeight} viewBox='0 0 970 233' fill={logoFill} xmlns='http://www.w3.org/2000/svg'>
            <path d='M357.919 82.8722C342.981 82.8722 331.95 87.4683 325.056 96.8905V45.3869C325.056 42.4824 322.702 40.1279 319.797 40.1279H295.844C292.939 40.1279 290.585 42.4824 290.585 45.3869V195.735C290.585 198.639 292.939 200.994 295.844 200.994H319.797C322.702 200.994 325.056 198.639 325.056 195.735V138.256C325.056 122.629 333.329 114.586 346.428 114.586C358.148 114.586 366.422 121.94 366.422 135.498V195.735C366.422 198.639 368.776 200.994 371.681 200.994H395.634C398.538 200.994 400.893 198.639 400.893 195.735V130.443C400.893 115.505 396.756 104.015 388.483 95.5116C380.44 87.0087 370.099 82.8722 357.919 82.8722Z' fill='#04384D'/>
            <path d='M518.327 186.746C530.047 175.025 536.022 160.547 536.022 143.542C536.022 126.536 530.047 112.288 518.327 100.568C506.606 88.8476 492.128 82.8726 475.123 82.8726C458.117 82.8726 443.639 88.8476 431.919 100.568C420.198 112.288 414.223 126.536 414.223 143.542C414.223 160.547 420.198 175.025 431.919 186.746C443.639 198.466 458.117 204.211 475.123 204.211C492.128 204.211 506.606 198.466 518.327 186.746ZM456.278 163.075C451.223 158.02 448.695 151.585 448.695 143.542C448.695 135.498 451.223 129.064 456.278 124.008C461.334 118.952 467.539 116.424 475.123 116.424C482.706 116.424 488.911 118.952 493.967 124.008C499.023 129.064 501.551 135.498 501.551 143.542C501.551 151.585 499.023 158.02 493.967 163.075C488.911 168.131 482.706 170.659 475.123 170.659C467.539 170.659 461.334 168.131 456.278 163.075Z' fill='#04384D'/>
            <path d='M634.344 96.8909C626.3 87.4687 614.81 82.8726 600.102 82.8726C584.935 82.8726 572.066 88.8476 561.265 100.568C550.464 112.288 545.178 126.536 545.178 143.542C545.178 160.547 550.464 175.025 561.265 186.746C572.066 198.466 584.935 204.211 600.102 204.211C614.81 204.211 626.3 199.615 634.344 190.193V195.735C634.344 198.639 636.698 200.994 639.603 200.994H663.556C666.46 200.994 668.815 198.639 668.815 195.735V91.3489C668.815 88.4444 666.46 86.0899 663.556 86.0899H639.603C636.698 86.0899 634.344 88.4444 634.344 91.3489V96.8909ZM587.233 163.995C582.177 158.939 579.649 152.045 579.649 143.542C579.649 135.039 582.177 128.145 587.233 123.089C592.289 118.033 598.953 115.505 606.997 115.505C615.04 115.505 621.704 118.033 626.76 123.089C631.816 128.145 634.344 135.039 634.344 143.542C634.344 152.045 631.816 158.939 626.76 163.995C621.704 169.05 615.04 171.578 606.997 171.578C598.953 171.578 592.289 169.05 587.233 163.995Z' fill='#04384D'/>
            <path d='M818.201 82.8726C803.034 82.8726 792.003 87.9283 784.879 98.0399C778.214 87.9283 768.103 82.8726 754.774 82.8726C740.526 82.8726 730.184 87.4687 723.98 96.661V91.3489C723.98 88.4444 721.625 86.0899 718.721 86.0899H694.768C691.863 86.0899 689.508 88.4444 689.508 91.3489V195.735C689.508 198.639 691.863 200.994 694.768 200.994H718.721C721.625 200.994 723.98 198.639 723.98 195.735V136.188C723.98 122.629 730.644 114.586 741.905 114.586C752.706 114.586 758.451 121.71 758.451 133.43V195.735C758.451 198.639 760.805 200.994 763.71 200.994H787.663C790.568 200.994 792.922 198.639 792.922 195.735V136.188C792.922 122.629 799.587 114.586 810.847 114.586C821.648 114.586 827.393 121.71 827.393 133.43V195.735C827.393 198.639 829.748 200.994 832.652 200.994H856.605C859.51 200.994 861.865 198.639 861.865 195.735V130.443C861.865 115.965 857.958 104.474 849.915 95.9716C841.871 87.2389 831.3 82.8726 818.201 82.8726Z' fill='#04384D'/>
            <path d='M913.465 119.642C913.465 115.275 916.683 113.207 923.117 113.207C928.159 113.207 932.28 115.18 935.58 119.026C937.458 121.215 940.56 122.216 943.099 120.847L963.103 110.064C965.736 108.645 966.677 105.298 964.887 102.902C955.203 89.9395 940.276 82.8726 923.117 82.8726C910.478 82.8726 899.677 86.0899 890.944 92.7543C882.441 99.4187 878.075 108.611 878.075 120.561C878.075 144.001 898.758 151.815 914.615 156.181C925.645 158.939 934.608 161.697 934.608 166.293C934.608 171.119 930.471 173.417 922.198 173.417C914.706 173.417 909.064 170.775 905.471 165.592C903.582 162.867 899.98 161.386 897.099 163.026L877.054 174.436C874.653 175.803 873.693 178.817 875.117 181.185C884.312 196.477 900.064 204.211 922.198 204.211C935.757 204.211 947.017 200.994 956.21 194.789C965.402 188.354 969.998 178.932 969.998 166.522C970.228 141.473 949.315 133.2 933.459 129.753C922.428 126.766 913.465 124.238 913.465 119.642Z' fill='#04384D'/>
            <path d='M99.629 232.581C43.2546 224.221 0 175.625 0 116.925C0 52.349 52.3495 -0.000488281 116.926 -0.000488281C181.502 -0.000488281 233.852 52.349 233.852 116.925C233.852 175.625 190.597 224.222 134.222 232.581V187.531C134.222 181.426 138.305 176.182 143.778 173.478C164.352 163.314 178.502 142.118 178.502 117.617C178.502 83.2277 150.624 55.3493 116.234 55.3493C81.8444 55.3493 53.966 83.2277 53.966 117.617C53.966 142.54 68.6082 164.043 89.7595 173.993C95.3917 176.643 99.629 181.958 99.629 188.183V232.581Z' fill='#FC6A53'/>
            <path d='M116.926 143.909C131.828 143.909 143.909 131.828 143.909 116.926C143.909 102.024 131.828 89.9431 116.926 89.9431C102.024 89.9431 89.9431 102.024 89.9431 116.926C89.9431 131.828 102.024 143.909 116.926 143.909Z' fill='#FC6A53'/>
        </svg>
    );
};

export const LogoSymbol = ({width = defaultTandemLogoWidth, height = defaultTandemLogoHeight, fill = '#FC6A53'}: any) => {
    return (
        <svg width={width} height={height} viewBox='0 0 200 199' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M85.207 198.913C36.9932 191.764 0 150.202 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 150.202 163.007 191.764 114.793 198.913V160.385C114.793 155.164 118.284 150.679 122.965 148.366C140.561 139.674 152.663 121.546 152.663 100.592C152.663 71.1803 128.82 47.3375 99.4085 47.3375C69.9969 47.3375 46.1541 71.1803 46.1541 100.592C46.1541 121.907 58.6767 140.297 76.7662 148.807C81.5831 151.073 85.207 155.619 85.207 160.942V198.913Z' fill={fill}/>
            <path d='M123.077 100C123.077 112.745 112.745 123.077 100 123.077C87.255 123.077 76.9231 112.745 76.9231 100C76.9231 87.2551 87.255 76.9232 100 76.9232C112.745 76.9232 123.077 87.2551 123.077 100Z' fill={fill}/>
        </svg>
    );
};