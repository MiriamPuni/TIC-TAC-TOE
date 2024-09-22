import style from './style.module.scss'
import React, { useState } from 'react'

export default function X({ width, height, filter, transform, notActive = false }) {
    const [isActive, setIsActive] = useState(null)
    const onclickO = () => {
        setIsActive("O")
    }
    return (
        <>
            {notActive ?
                <svg className={style.X} width={width} height={height} viewBox="0 0 340 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.376 46.6328C106.722 46.6197 107.069 46.6582 107.404 46.7471C109.633 48.0852 146.164 113.577 161.758 150.111H164.434C183.594 114.468 220.125 47.1923 223.245 46.7471C223.314 46.7432 223.383 46.7432 223.452 46.7471C229.746 46.7471 294.086 64.1959 294.527 69.476C294.975 75.2689 225.025 198.681 221.906 203.136C238.838 231.203 300.765 340.805 300.322 343.925C299.054 347.309 242.728 366.369 224.473 366.369C223.615 366.376 222.758 366.32 221.909 366.201C219.237 365.308 182.703 298.478 163.991 261.947H161.317C143.05 298.478 106.961 365.308 104.735 365.308C103.455 365.512 102.161 365.606 100.865 365.588C81.2972 365.588 28.9322 350.354 28.1047 347.044C27.2142 343.924 87.8059 232.986 106.073 203.136C103.397 199.126 34.7881 75.7143 35.2333 69.9213C35.2333 64.8091 96.4125 46.6399 106.381 46.6399L106.376 46.6328ZM106.381 18.6659C95.4614 18.6659 71.8257 25.5591 58.7059 29.6689C51.9758 31.767 42.2758 34.977 34.3079 38.2546C26.3819 41.5182 8.00765 49.0666 7.28266 68.7091C6.8444 77.2202 9.69076 83.7241 20.8687 105.425C26.7596 116.862 34.8557 132.045 44.9031 150.552C53.4491 166.28 65.4709 188.125 73.7349 202.875C62.7971 221.781 47.6725 249.046 35.329 271.752C26.0999 288.725 18.2018 303.539 12.4835 314.601C1.62721 335.612 -2.09566 342.808 1.1097 354.405C5.25451 369.724 19.2765 374.705 27.699 377.699C33.7764 379.857 41.7537 382.296 50.1599 384.564C62.6083 387.925 85.7474 393.562 100.858 393.562C103.283 393.577 105.705 393.421 108.108 393.096C121.428 391.56 128.156 381.207 130.487 377.631C131.958 375.37 133.795 372.344 136.103 368.381C140.052 361.606 145.397 352.037 151.563 340.71C155.249 333.949 159.07 326.837 162.858 319.718C166.77 326.944 170.698 334.15 174.458 340.964C180.752 352.373 186.209 362.014 190.233 368.856C197.658 381.482 202.136 389.103 213.032 392.739L215.321 393.504L217.703 393.865C219.941 394.196 222.201 394.357 224.464 394.348C238.42 394.348 260.811 388.235 277.136 383.109C285.864 380.368 294.247 377.451 300.746 374.892C310.071 371.218 321.673 366.649 326.508 353.748L327.576 350.895L328.007 347.88C329.464 337.665 326.455 332.08 315.258 311.295C309.54 300.684 301.504 286.133 292.023 269.213C278.456 245.008 264.24 220.076 254.342 203.082C263.718 186.729 277.304 162.471 284.011 150.379C294.254 131.907 302.514 116.705 308.565 105.194C320.412 82.6401 323.112 76.4415 322.41 67.3313V67.2474V67.1612C320.802 47.8125 302.807 40.9098 294.159 37.5856C286.123 34.4991 276.125 31.3847 269.15 29.3169C255.883 25.3796 232.317 18.7777 223.459 18.7777C222.538 18.7777 221.613 18.8196 220.713 18.9012L219.999 18.9643L219.3 19.0668C205.036 21.1066 198.751 31.5642 191.473 43.6746C187.489 50.3044 182.097 59.6968 175.451 71.5974C171.919 77.9172 168.208 84.6286 164.494 91.4123C160.604 83.9083 157.018 77.1735 154.237 71.989C148.719 61.7318 143.281 51.9247 138.907 44.3577C132.037 32.4548 128.902 27.0208 121.843 22.7827L119.2 21.1951L116.276 20.2208C113.094 19.1719 109.762 18.6497 106.411 18.6751L106.381 18.6659Z" fill="#9B9B9B" />
                    <path d="M118.043 27.9671C118.389 27.9536 118.734 27.9921 119.069 28.0813C121.3 29.4194 157.831 94.9112 173.425 131.445H176.089C195.244 95.8017 231.778 28.5289 234.897 28.0813C234.967 28.0775 235.037 28.0775 235.107 28.0813C241.402 28.0813 305.742 45.5301 306.185 50.8102C306.632 56.6055 236.681 180.015 233.562 184.47C250.493 212.537 312.423 322.14 311.978 325.259C310.707 328.644 254.381 347.703 236.128 347.703C235.271 347.711 234.414 347.654 233.564 347.535C230.893 346.645 194.358 279.815 175.646 243.281H172.972C154.705 279.815 118.617 346.645 116.388 346.645C115.108 346.847 113.814 346.94 112.518 346.922C92.9526 346.922 40.5876 331.69 39.7601 328.378C38.8672 325.259 99.4613 214.321 117.728 184.47C115.052 180.463 46.4388 57.0484 46.8864 51.2554C46.8864 46.1432 108.066 27.974 118.036 27.974L118.043 27.9671ZM118.036 0C107.117 0 83.4788 6.8932 70.3613 11.003C63.6289 13.1011 53.9312 16.3112 45.9632 19.5889C38.0373 22.8525 19.663 30.4007 18.9357 50.0432C18.4974 58.5566 21.3438 65.0606 32.5217 86.7591C38.4126 98.1958 46.5088 113.379 56.5561 131.888C65.1022 147.614 77.1264 169.46 85.388 184.209C74.4502 203.115 59.3255 230.382 46.982 253.086C37.7529 270.059 29.8572 284.876 24.1365 295.935C13.2826 316.946 9.55737 324.142 12.7627 335.74C16.9052 351.058 30.9319 356.039 39.3521 359.033C45.4317 361.191 53.409 363.63 61.8129 365.898C74.2613 369.259 97.4005 374.896 112.511 374.896C114.936 374.91 117.36 374.754 119.763 374.43C133.081 372.892 139.811 362.541 142.143 358.963C143.614 356.702 145.448 353.676 147.756 349.713C151.705 342.938 157.05 333.369 163.219 322.042C166.902 315.281 170.725 308.169 174.513 301.049C178.423 308.276 182.351 315.482 186.113 322.296C192.407 333.705 197.865 343.349 201.888 350.188C209.311 362.814 213.777 370.434 224.687 374.071L226.976 374.836L229.356 375.197C231.594 375.528 233.854 375.689 236.117 375.679C250.071 375.679 272.462 369.57 288.789 364.441C297.513 361.702 305.9 358.783 312.397 356.224C321.722 352.55 333.324 347.981 338.159 335.08L339.229 332.227L339.658 329.212C341.115 318.997 338.105 313.412 326.909 292.627C321.195 282.016 313.155 267.464 303.674 250.545C290.111 226.34 275.891 201.408 265.998 184.414C275.371 168.061 288.96 143.803 295.662 131.711C305.905 113.241 314.169 98.0373 320.216 86.5283C332.068 63.9719 334.767 57.7757 334.061 48.6632V48.5792V48.493C332.455 29.1443 314.46 22.2416 305.814 18.9197C297.774 15.8309 287.775 12.7188 280.805 10.6488C267.536 6.71142 243.959 0.109558 235.114 0.109558C234.182 0.109558 233.266 0.151469 232.368 0.23306L231.655 0.296091L230.956 0.398678C216.691 2.43845 210.409 12.8983 203.128 25.0064C199.147 31.6363 193.755 41.0286 187.104 52.9315C183.577 59.249 179.877 65.9604 176.147 72.7465C172.259 65.2401 168.674 58.5054 165.89 53.3232C160.372 43.0661 154.934 33.2565 150.561 25.6895C143.691 13.8006 140.553 8.35261 133.496 4.11455L130.853 2.52695L127.93 1.55487C124.747 0.504326 121.415 -0.0185486 118.064 0.00697188L118.036 0Z" fill="#9B9B9B" />
                    <path d="M165.952 243.272C147.685 279.806 111.598 346.636 109.372 346.636C94.2192 349.307 33.6297 331.933 32.7392 328.368C31.8487 325.249 92.4382 214.311 110.705 184.461C108.031 180.454 39.4227 57.0391 39.8656 51.2461C39.8656 45.9031 106.696 26.3026 112.043 28.079C114.27 29.4171 150.804 94.909 166.399 131.443H169.071C188.231 95.7995 224.76 28.5266 227.879 28.079C232.775 27.6361 298.719 45.4532 299.166 50.8009C299.612 56.5962 229.662 180.006 226.543 184.461C243.472 212.528 305.402 322.13 304.957 325.249C303.623 328.814 241.246 349.755 226.543 347.526C223.872 346.636 187.338 279.806 168.625 243.272H165.952Z" fill="#9B9B9B" />
                    <path d="M227.703 347.526C225.031 346.636 188.497 279.806 169.797 243.271H167.111C148.844 279.806 112.758 346.636 110.531 346.636C97.0502 349.013 47.5688 335.511 36.2207 330V322.564C47.3707 299.019 95.3904 211.472 111.625 184.855H227.95C245.215 213.542 306.569 322.144 306.128 325.247C304.86 328.632 248.548 347.687 230.281 347.689C229.419 347.699 228.557 347.644 227.703 347.526Z" fill="#9B9B9B" />
                    <path d="M235.929 354.666C234.778 354.673 233.629 354.595 232.49 354.433L231.324 354.151C228.156 353.093 226.844 352.654 204.474 312.136C194.42 293.928 183.17 272.959 174.339 256.011C165.809 272.726 154.788 293.613 144.785 311.987C122.988 352.018 121.443 353.557 116.925 353.615C106.253 355.116 83.6427 349.899 70.9471 346.6C34.7371 337.194 33.7882 333.404 32.949 330.049C32.0166 326.834 31.5807 325.266 65.3896 263.082C82.7312 231.184 100.287 199.926 109.568 184.384C103.826 174.336 88.8365 147.369 74.9684 121.845C40.0848 57.6498 39.6745 53.6611 39.8773 50.8474C39.9952 49.4391 40.4417 48.078 41.181 46.8736C41.9202 45.6691 42.9316 44.6548 44.134 43.9121C52.7919 37.6692 112.092 18.3789 121.249 21.4281L121.981 21.6611L122.643 22.0598C124.151 22.9666 126.431 24.3373 147.353 63.2212C152.96 73.6346 165.644 97.5663 175.19 118.276C227.007 22.1111 229.215 21.7964 233.877 21.1297L234.236 21.0877C241.523 20.442 300.982 36.8464 309.85 44.2921C310.765 45.0039 311.526 45.894 312.087 46.9086C312.648 47.9232 312.997 49.0411 313.114 50.1946C313.347 53.1109 313.58 56.0809 277.288 121.498C262.961 147.335 247.647 174.315 241.684 184.451C250.892 199.963 268.903 231.431 285.347 260.764C319.503 321.708 319.301 323.119 318.86 326.214L318.753 326.965L318.487 327.664C317.475 330.368 316.091 334.07 279.79 345.211C267.819 348.927 247.293 354.666 235.929 354.666ZM168.63 236.278H179.901L181.85 240.082C200.427 276.348 229.639 329.504 237.052 340.726C250.475 340.376 289.459 328.105 303.041 322.31C292.063 300.606 244.545 216.242 227.555 188.069L225.205 184.174L227.816 180.444C231.754 174.551 287.632 75.7209 297.821 53.3627C286.123 48.0686 249.494 37.6833 237.759 35.4687C232.276 43.6045 215.473 72.9095 182.232 134.748L180.251 138.432H168.779L166.966 134.184C152.829 101.061 123.258 47.649 115.512 35.1913C103.987 36.9466 66.7021 48.0384 55.1138 53.6518C64.8698 75.5205 119.986 175.031 123.548 180.617L125.9 184.3L123.671 188.107C107.12 215.172 59.0978 303.033 48.5166 325.203C61.8649 330.331 99.5366 340.15 112.813 339.943C120.128 328.804 149.61 274.311 166.698 240.138L168.63 236.278Z" fill="#9B9B9B" />
                    <path d="M11.3301 55.0224L23.282 35.8951L33.3759 53.6959C33.3759 53.6959 27.294 67.1491 26.7391 67.5175C26.1843 67.8858 11.3301 55.0224 11.3301 55.0224Z" fill="#9B9B9B" />
                    <path d="M336.56 338.633L322.909 360.478L305.362 347.706L323.007 324.932L336.56 338.633Z" fill="#9B9B9B" />
                </svg>
                :
                <svg className={style.X} width={width} height={height} filter={filter} viewBox="0 0 211 245"
                    style={{ transform: transform }}
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.0156 28.9398C66.2306 28.9317 66.4457 28.9556 66.6536 29.0107C68.0367 29.8411 90.7078 70.4846 100.385 93.1572H102.046C113.936 71.0372 136.607 29.287 138.543 29.0107C138.586 29.0083 138.629 29.0083 138.672 29.0107C142.578 29.0107 182.506 39.8392 182.78 43.116C183.058 46.711 139.648 123.299 137.712 126.064C148.22 143.482 186.651 211.5 186.376 213.435C185.589 215.536 150.634 227.364 139.305 227.364C138.773 227.369 138.241 227.334 137.714 227.26C136.056 226.706 113.383 185.232 101.771 162.561H100.111C88.7751 185.232 66.3787 226.706 64.9972 226.706C64.2031 226.833 63.3996 226.891 62.5956 226.88C50.4521 226.88 17.955 217.425 17.4414 215.371C16.8888 213.435 54.4913 144.589 65.8276 126.064C64.1668 123.575 21.5891 46.9874 21.8654 43.3923C21.8654 40.2197 59.8324 28.9442 66.0185 28.9442L66.0156 28.9398ZM66.0185 11.5839C59.2422 11.5839 44.5742 15.8617 36.4322 18.4122C32.2556 19.7142 26.2359 21.7063 21.291 23.7404C16.3723 25.7657 4.96945 30.4502 4.51953 42.64C4.24755 47.9219 6.01397 51.9582 12.9509 65.4255C16.6067 72.523 21.631 81.9453 27.8663 93.4306C33.1699 103.191 40.6305 116.748 45.759 125.902C38.9711 137.634 29.585 154.555 21.9247 168.646C16.1973 179.179 11.2958 188.373 7.74709 195.237C1.00983 208.276 -1.30054 212.742 0.688664 219.94C3.26089 229.446 11.9628 232.538 17.1897 234.395C20.9612 235.735 25.9118 237.248 31.1286 238.656C38.854 240.742 53.2138 244.24 62.5913 244.24C64.096 244.249 65.5994 244.152 67.0906 243.951C75.357 242.997 79.5321 236.572 80.9788 234.353C81.8917 232.95 83.0316 231.072 84.4639 228.613C86.9146 224.409 90.2319 218.47 94.0584 211.44C96.3456 207.245 98.7167 202.831 101.068 198.413C103.495 202.898 105.933 207.369 108.266 211.598C112.172 218.678 115.559 224.662 118.056 228.908C122.664 236.743 125.443 241.472 132.205 243.729L133.625 244.204L135.104 244.428C136.493 244.633 137.895 244.733 139.299 244.727C147.961 244.727 161.856 240.934 171.988 237.753C177.404 236.052 182.606 234.242 186.64 232.653C192.426 230.373 199.627 227.538 202.627 219.532L203.29 217.761L203.557 215.89C204.462 209.551 202.594 206.085 195.645 193.186C192.097 186.601 187.11 177.57 181.226 167.07C172.806 152.049 163.984 136.577 157.842 126.03C163.66 115.882 172.092 100.828 176.254 93.3236C182.611 81.8599 187.736 72.426 191.492 65.2823C198.844 51.2855 200.519 47.4387 200.084 41.785V41.7329V41.6794C199.086 29.6719 187.919 25.3882 182.551 23.3252C177.565 21.4098 171.36 19.477 167.031 18.1938C158.798 15.7503 144.173 11.6533 138.676 11.6533C138.104 11.6533 137.53 11.6793 136.972 11.7299L136.529 11.769L136.095 11.8327C127.243 13.0985 123.342 19.5884 118.826 27.104C116.353 31.2184 113.007 37.0471 108.883 44.4325C106.691 48.3545 104.388 52.5195 102.083 56.7294C99.6687 52.0725 97.4436 47.893 95.7177 44.6755C92.2934 38.3101 88.9183 32.2239 86.2043 27.5279C81.9408 20.1411 79.995 16.7688 75.6144 14.1387L73.9739 13.1535L72.1597 12.5488C70.1848 11.8979 68.1167 11.5738 66.0373 11.5896L66.0185 11.5839Z" fill="black" />
                    <path d="M73.2565 17.356C73.4711 17.3477 73.6856 17.3716 73.8931 17.4269C75.2776 18.2573 97.9488 58.9007 107.626 81.5733H109.279C121.167 59.4534 143.839 17.7047 145.775 17.4269C145.818 17.4246 145.862 17.4246 145.905 17.4269C149.811 17.4269 189.74 28.2554 190.015 31.5322C190.293 35.1287 146.882 111.715 144.946 114.48C155.453 131.898 193.886 199.916 193.61 201.852C192.822 203.952 157.867 215.78 146.539 215.78C146.007 215.785 145.475 215.75 144.948 215.676C143.29 215.124 120.617 173.65 109.004 150.977H107.345C96.0088 173.65 73.6125 215.124 72.2294 215.124C71.4353 215.249 70.6318 215.306 69.8279 215.296C57.6858 215.296 25.1887 205.843 24.6751 203.787C24.121 201.852 61.725 133.005 73.0613 114.48C71.4005 111.993 28.8199 35.4035 29.0976 31.8085C29.0976 28.6359 67.0647 17.3603 73.2522 17.3603L73.2565 17.356ZM73.2522 0C66.4759 0 51.8064 4.27784 43.6659 6.82836C39.4878 8.13038 33.4696 10.1225 28.5247 12.1566C23.606 14.182 12.2031 18.8663 11.7518 31.0562C11.4798 36.3395 13.2462 40.3758 20.1831 53.8416C23.8389 60.9391 28.8633 70.3615 35.0985 81.8482C40.4021 91.6076 47.8642 105.165 52.9913 114.318C46.2034 126.051 36.8172 142.973 29.157 157.062C23.4295 167.595 18.5295 176.791 14.9793 183.654C8.24352 196.693 5.9317 201.159 7.92091 208.356C10.4917 217.862 19.1965 220.954 24.4219 222.811C28.1949 224.151 33.1455 225.664 38.3608 227.072C46.0862 229.158 60.4461 232.656 69.8236 232.656C71.3287 232.664 72.8326 232.568 74.3243 232.367C82.5892 231.412 86.7658 224.989 88.2125 222.768C89.1254 221.365 90.2639 219.487 91.6962 217.027C94.1469 212.823 97.4641 206.885 101.292 199.855C103.578 195.66 105.95 191.246 108.301 186.828C110.727 191.312 113.165 195.784 115.5 200.013C119.406 207.093 122.793 213.078 125.29 217.323C129.896 225.158 132.668 229.887 139.439 232.144L140.859 232.618L142.336 232.843C143.725 233.048 145.128 233.148 146.532 233.142C155.192 233.142 169.087 229.35 179.22 226.168C184.633 224.468 189.838 222.657 193.87 221.068C199.657 218.788 206.857 215.953 209.858 207.947L210.522 206.176L210.788 204.305C211.692 197.966 209.825 194.5 202.876 181.601C199.33 175.015 194.341 165.985 188.457 155.485C180.04 140.464 171.215 124.992 165.075 114.445C170.893 104.297 179.325 89.2423 183.485 81.7383C189.841 70.2761 194.97 60.8407 198.723 53.6984C206.078 39.7002 207.753 35.8549 207.315 30.1998V30.1477V30.0942C206.318 18.0866 195.151 13.8029 189.785 11.7413C184.795 9.82446 178.59 7.89316 174.265 6.60849C166.03 4.16503 151.398 0.0679904 145.91 0.0679904C145.331 0.0679904 144.762 0.0939999 144.205 0.144634L143.763 0.183751L143.329 0.247415C134.476 1.51327 130.578 8.00455 126.06 15.5187C123.589 19.6331 120.242 25.4618 116.115 32.8487C113.926 36.7692 111.63 40.9342 109.315 45.1456C106.902 40.4872 104.677 36.3077 102.95 33.0917C99.5257 26.7263 96.1505 20.6386 93.4365 15.9426C89.1731 8.56446 87.2259 5.18353 82.8467 2.55344L81.2061 1.56819L79.392 0.964934C77.4173 0.312979 75.3491 -0.011511 73.2696 0.00432666L73.2522 0Z" fill="black" />
                    <path d="M102.988 150.971C91.6512 173.644 69.2564 215.118 67.8748 215.118C58.4713 216.776 20.8702 205.994 20.3176 203.782C19.7649 201.846 57.366 132.999 68.7023 114.474C67.043 111.987 24.4652 35.3978 24.7401 31.8027C24.7401 28.4869 66.214 16.3231 69.5327 17.4255C70.9143 18.2559 93.5869 58.8994 103.265 81.572H104.923C116.814 59.452 139.483 17.7032 141.419 17.4255C144.457 17.1506 185.381 28.2077 185.659 31.5264C185.935 35.1229 142.526 111.71 140.59 114.474C151.096 131.892 189.529 199.91 189.253 201.846C188.425 204.058 149.714 217.054 140.59 215.67C138.932 215.118 116.259 173.644 104.647 150.971H102.988Z" fill="#FCD015" />
                    <path d="M141.309 215.67C139.651 215.118 116.979 173.644 105.373 150.971H103.707C92.3703 173.644 69.9754 215.118 68.5938 215.118C60.2276 216.593 29.5201 208.214 22.4775 204.794V200.179C29.3971 185.568 59.1976 131.237 69.2723 114.719H141.462C152.177 132.522 190.252 199.919 189.979 201.844C189.192 203.945 154.245 215.77 142.909 215.772C142.374 215.778 141.839 215.744 141.309 215.67Z" fill="#FBB500" />
                    <path d="M146.414 220.102C145.7 220.105 144.987 220.057 144.28 219.957L143.557 219.782C141.591 219.125 140.776 218.853 126.894 193.708C120.654 182.408 113.672 169.395 108.192 158.877C102.899 169.25 96.0588 182.213 89.851 193.616C76.3244 218.458 75.3653 219.413 72.5616 219.449C65.9386 220.381 51.9071 217.143 44.0284 215.096C21.5569 209.259 20.9681 206.906 20.4473 204.825C19.8686 202.83 19.5981 201.856 40.5795 163.265C51.3415 143.47 62.2365 124.071 67.9958 114.426C64.4326 108.191 55.1304 91.4557 46.524 75.6159C24.8757 35.7768 24.621 33.3015 24.7469 31.5553C24.8201 30.6813 25.0971 29.8367 25.5559 29.0892C26.0147 28.3417 26.6424 27.7122 27.3885 27.2513C32.7616 23.3771 69.5626 11.4057 75.2452 13.298L75.6995 13.4427L76.1104 13.6901C77.0464 14.2528 78.4612 15.1035 91.4453 39.2343C94.9246 45.6967 102.796 60.5485 108.72 73.401C140.877 13.7219 142.247 13.5266 145.141 13.1129L145.364 13.0868C149.886 12.6861 186.785 22.8664 192.289 27.4872C192.857 27.9289 193.329 28.4813 193.677 29.1109C194.025 29.7406 194.242 30.4343 194.314 31.1502C194.459 32.96 194.603 34.8032 172.081 75.4003C163.19 91.434 153.686 108.178 149.986 114.468C155.7 124.095 166.877 143.624 177.082 161.827C198.279 199.648 198.154 200.523 197.88 202.445L197.814 202.911L197.649 203.345C197.021 205.023 196.161 207.32 173.634 214.234C166.205 216.54 153.467 220.102 146.414 220.102ZM104.649 146.631H111.644L112.854 148.992C124.382 171.498 142.511 204.486 147.111 211.45C155.441 211.233 179.634 203.618 188.063 200.021C181.25 186.553 151.761 134.197 141.217 116.714L139.759 114.296L141.379 111.981C143.823 108.324 178.5 46.9915 184.824 33.1163C177.564 29.8308 154.832 23.3858 147.55 22.0115C144.147 27.0605 133.719 45.2468 113.091 83.6233L111.861 85.9091H104.742L103.616 83.2732C94.8436 62.7171 76.4922 29.5704 71.6849 21.8393C64.5324 22.9287 41.394 29.812 34.2025 33.2957C40.2569 46.8671 74.4611 108.622 76.6717 112.088L78.1313 114.374L76.7483 116.737C66.4768 133.533 36.6749 188.059 30.1083 201.817C38.3921 205 61.7707 211.093 70.0097 210.964C74.5494 204.052 92.8457 170.234 103.45 149.027L104.649 146.631Z" fill="#FCD015" />
                    <path d="M7.03125 34.1463L14.4485 22.2761L20.7126 33.3231C20.7126 33.3231 16.9382 41.672 16.5939 41.9005C16.2496 42.1291 7.03125 34.1463 7.03125 34.1463Z" fill="black" />
                    <path d="M208.865 210.151L200.393 223.708L189.504 215.782L200.454 201.649L208.865 210.151Z" fill="black" />
                </svg>}

        </>
    )
}
