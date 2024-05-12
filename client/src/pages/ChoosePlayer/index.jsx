import style from './style.module.scss'
import ButtonBack from '../../components/ButtonBack'
import Title from '../../components/Title'
import Board from '../../components/Board'
import Cell from '../../components/Cell'
import X from '../../components/X'
import O from '../../components/O'
import { useState } from 'react'
import Button from '../../components/Button'

export default function ChoosePlayer() {
    const [isActive, setIsActive] = useState(null)
    // const className = ({ isActive }) => `${isActive == 'X' ? style.x : ""} ${isActive == 'O' ? style.o : ""} ${isActive == null ? style.null : ""}`
    const onclickO = () => {
        setIsActive("O")
        // else setIsActive(null)
    }

    const onclickX = () => {
        setIsActive("X")
        // else setIsActive(null)
    }
    console.log(isActive);

    const grayX = <svg width="110" height="110" viewBox="0 0 340 395" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M106.376 46.6328C106.722 46.6197 107.069 46.6582 107.404 46.7471C109.633 48.0852 146.164 113.577 161.758 150.111H164.434C183.594 114.468 220.125 47.1923 223.245 46.7471C223.314 46.7432 223.383 46.7432 223.452 46.7471C229.746 46.7471 294.086 64.1959 294.527 69.476C294.975 75.2689 225.025 198.681 221.906 203.136C238.838 231.203 300.765 340.805 300.322 343.925C299.054 347.309 242.728 366.369 224.473 366.369C223.615 366.376 222.758 366.32 221.909 366.201C219.237 365.308 182.703 298.478 163.991 261.947H161.317C143.05 298.478 106.961 365.308 104.735 365.308C103.455 365.512 102.161 365.606 100.865 365.588C81.2972 365.588 28.9322 350.354 28.1047 347.044C27.2142 343.924 87.8059 232.986 106.073 203.136C103.397 199.126 34.7881 75.7143 35.2333 69.9213C35.2333 64.8091 96.4125 46.6399 106.381 46.6399L106.376 46.6328ZM106.381 18.6659C95.4614 18.6659 71.8257 25.5591 58.7059 29.6689C51.9758 31.767 42.2758 34.977 34.3079 38.2546C26.3819 41.5182 8.00765 49.0666 7.28266 68.7091C6.8444 77.2202 9.69076 83.7241 20.8687 105.425C26.7596 116.862 34.8557 132.045 44.9031 150.552C53.4491 166.28 65.4709 188.125 73.7349 202.875C62.7971 221.781 47.6725 249.046 35.329 271.752C26.0999 288.725 18.2018 303.539 12.4835 314.601C1.62721 335.612 -2.09566 342.808 1.1097 354.405C5.25451 369.724 19.2765 374.705 27.699 377.699C33.7764 379.857 41.7537 382.296 50.1599 384.564C62.6083 387.925 85.7474 393.562 100.858 393.562C103.283 393.577 105.705 393.421 108.108 393.096C121.428 391.56 128.156 381.207 130.487 377.631C131.958 375.37 133.795 372.344 136.103 368.381C140.052 361.606 145.397 352.037 151.563 340.71C155.249 333.949 159.07 326.837 162.858 319.718C166.77 326.944 170.698 334.15 174.458 340.964C180.752 352.373 186.209 362.014 190.233 368.856C197.658 381.482 202.136 389.103 213.032 392.739L215.321 393.504L217.703 393.865C219.941 394.196 222.201 394.357 224.464 394.348C238.42 394.348 260.811 388.235 277.136 383.109C285.864 380.368 294.247 377.451 300.746 374.892C310.071 371.218 321.673 366.649 326.508 353.748L327.576 350.895L328.007 347.88C329.464 337.665 326.455 332.08 315.258 311.295C309.54 300.684 301.504 286.133 292.023 269.213C278.456 245.008 264.24 220.076 254.342 203.082C263.718 186.729 277.304 162.471 284.011 150.379C294.254 131.907 302.514 116.705 308.565 105.194C320.412 82.6401 323.112 76.4415 322.41 67.3313V67.2474V67.1612C320.802 47.8125 302.807 40.9098 294.159 37.5856C286.123 34.4991 276.125 31.3847 269.15 29.3169C255.883 25.3796 232.317 18.7777 223.459 18.7777C222.538 18.7777 221.613 18.8196 220.713 18.9012L219.999 18.9643L219.3 19.0668C205.036 21.1066 198.751 31.5642 191.473 43.6746C187.489 50.3044 182.097 59.6968 175.451 71.5974C171.919 77.9172 168.208 84.6286 164.494 91.4123C160.604 83.9083 157.018 77.1735 154.237 71.989C148.719 61.7318 143.281 51.9247 138.907 44.3577C132.037 32.4548 128.902 27.0208 121.843 22.7827L119.2 21.1951L116.276 20.2208C113.094 19.1719 109.762 18.6497 106.411 18.6751L106.381 18.6659Z" fill="#9B9B9B" />
        <path d="M118.043 27.9671C118.389 27.9536 118.734 27.9921 119.069 28.0813C121.3 29.4194 157.831 94.9112 173.425 131.445H176.089C195.244 95.8017 231.778 28.5289 234.897 28.0813C234.967 28.0775 235.037 28.0775 235.107 28.0813C241.402 28.0813 305.742 45.5301 306.185 50.8102C306.632 56.6055 236.681 180.015 233.562 184.47C250.493 212.537 312.423 322.14 311.978 325.259C310.707 328.644 254.381 347.703 236.128 347.703C235.271 347.711 234.414 347.654 233.564 347.535C230.893 346.645 194.358 279.815 175.646 243.281H172.972C154.705 279.815 118.617 346.645 116.388 346.645C115.108 346.847 113.814 346.94 112.518 346.922C92.9526 346.922 40.5876 331.69 39.7601 328.378C38.8672 325.259 99.4613 214.321 117.728 184.47C115.052 180.463 46.4388 57.0484 46.8864 51.2554C46.8864 46.1432 108.066 27.974 118.036 27.974L118.043 27.9671ZM118.036 0C107.117 0 83.4788 6.8932 70.3613 11.003C63.6289 13.1011 53.9312 16.3112 45.9632 19.5889C38.0373 22.8525 19.663 30.4007 18.9357 50.0432C18.4974 58.5566 21.3438 65.0606 32.5217 86.7591C38.4126 98.1958 46.5088 113.379 56.5561 131.888C65.1022 147.614 77.1264 169.46 85.388 184.209C74.4502 203.115 59.3255 230.382 46.982 253.086C37.7529 270.059 29.8572 284.876 24.1365 295.935C13.2826 316.946 9.55737 324.142 12.7627 335.74C16.9052 351.058 30.9319 356.039 39.3521 359.033C45.4317 361.191 53.409 363.63 61.8129 365.898C74.2613 369.259 97.4005 374.896 112.511 374.896C114.936 374.91 117.36 374.754 119.763 374.43C133.081 372.892 139.811 362.541 142.143 358.963C143.614 356.702 145.448 353.676 147.756 349.713C151.705 342.938 157.05 333.369 163.219 322.042C166.902 315.281 170.725 308.169 174.513 301.049C178.423 308.276 182.351 315.482 186.113 322.296C192.407 333.705 197.865 343.349 201.888 350.188C209.311 362.814 213.777 370.434 224.687 374.071L226.976 374.836L229.356 375.197C231.594 375.528 233.854 375.689 236.117 375.679C250.071 375.679 272.462 369.57 288.789 364.441C297.513 361.702 305.9 358.783 312.397 356.224C321.722 352.55 333.324 347.981 338.159 335.08L339.229 332.227L339.658 329.212C341.115 318.997 338.105 313.412 326.909 292.627C321.195 282.016 313.155 267.464 303.674 250.545C290.111 226.34 275.891 201.408 265.998 184.414C275.371 168.061 288.96 143.803 295.662 131.711C305.905 113.241 314.169 98.0373 320.216 86.5283C332.068 63.9719 334.767 57.7757 334.061 48.6632V48.5792V48.493C332.455 29.1443 314.46 22.2416 305.814 18.9197C297.774 15.8309 287.775 12.7188 280.805 10.6488C267.536 6.71142 243.959 0.109558 235.114 0.109558C234.182 0.109558 233.266 0.151469 232.368 0.23306L231.655 0.296091L230.956 0.398678C216.691 2.43845 210.409 12.8983 203.128 25.0064C199.147 31.6363 193.755 41.0286 187.104 52.9315C183.577 59.249 179.877 65.9604 176.147 72.7465C172.259 65.2401 168.674 58.5054 165.89 53.3232C160.372 43.0661 154.934 33.2565 150.561 25.6895C143.691 13.8006 140.553 8.35261 133.496 4.11455L130.853 2.52695L127.93 1.55487C124.747 0.504326 121.415 -0.0185486 118.064 0.00697188L118.036 0Z" fill="#9B9B9B" />
        <path d="M165.952 243.272C147.685 279.806 111.598 346.636 109.372 346.636C94.2192 349.307 33.6297 331.933 32.7392 328.368C31.8487 325.249 92.4382 214.311 110.705 184.461C108.031 180.454 39.4227 57.0391 39.8656 51.2461C39.8656 45.9031 106.696 26.3026 112.043 28.079C114.27 29.4171 150.804 94.909 166.399 131.443H169.071C188.231 95.7995 224.76 28.5266 227.879 28.079C232.775 27.6361 298.719 45.4532 299.166 50.8009C299.612 56.5962 229.662 180.006 226.543 184.461C243.472 212.528 305.402 322.13 304.957 325.249C303.623 328.814 241.246 349.755 226.543 347.526C223.872 346.636 187.338 279.806 168.625 243.272H165.952Z" fill="#9B9B9B" />
        <path d="M227.703 347.526C225.031 346.636 188.497 279.806 169.797 243.271H167.111C148.844 279.806 112.758 346.636 110.531 346.636C97.0502 349.013 47.5688 335.511 36.2207 330V322.564C47.3707 299.019 95.3904 211.472 111.625 184.855H227.95C245.215 213.542 306.569 322.144 306.128 325.247C304.86 328.632 248.548 347.687 230.281 347.689C229.419 347.699 228.557 347.644 227.703 347.526Z" fill="#9B9B9B" />
        <path d="M235.929 354.666C234.778 354.673 233.629 354.595 232.49 354.433L231.324 354.151C228.156 353.093 226.844 352.654 204.474 312.136C194.42 293.928 183.17 272.959 174.339 256.011C165.809 272.726 154.788 293.613 144.785 311.987C122.988 352.018 121.443 353.557 116.925 353.615C106.253 355.116 83.6427 349.899 70.9471 346.6C34.7371 337.194 33.7882 333.404 32.949 330.049C32.0166 326.834 31.5807 325.266 65.3896 263.082C82.7312 231.184 100.287 199.926 109.568 184.384C103.826 174.336 88.8365 147.369 74.9684 121.845C40.0848 57.6498 39.6745 53.6611 39.8773 50.8474C39.9952 49.4391 40.4417 48.078 41.181 46.8736C41.9202 45.6691 42.9316 44.6548 44.134 43.9121C52.7919 37.6692 112.092 18.3789 121.249 21.4281L121.981 21.6611L122.643 22.0598C124.151 22.9666 126.431 24.3373 147.353 63.2212C152.96 73.6346 165.644 97.5663 175.19 118.276C227.007 22.1111 229.215 21.7964 233.877 21.1297L234.236 21.0877C241.523 20.442 300.982 36.8464 309.85 44.2921C310.765 45.0039 311.526 45.894 312.087 46.9086C312.648 47.9232 312.997 49.0411 313.114 50.1946C313.347 53.1109 313.58 56.0809 277.288 121.498C262.961 147.335 247.647 174.315 241.684 184.451C250.892 199.963 268.903 231.431 285.347 260.764C319.503 321.708 319.301 323.119 318.86 326.214L318.753 326.965L318.487 327.664C317.475 330.368 316.091 334.07 279.79 345.211C267.819 348.927 247.293 354.666 235.929 354.666ZM168.63 236.278H179.901L181.85 240.082C200.427 276.348 229.639 329.504 237.052 340.726C250.475 340.376 289.459 328.105 303.041 322.31C292.063 300.606 244.545 216.242 227.555 188.069L225.205 184.174L227.816 180.444C231.754 174.551 287.632 75.7209 297.821 53.3627C286.123 48.0686 249.494 37.6833 237.759 35.4687C232.276 43.6045 215.473 72.9095 182.232 134.748L180.251 138.432H168.779L166.966 134.184C152.829 101.061 123.258 47.649 115.512 35.1913C103.987 36.9466 66.7021 48.0384 55.1138 53.6518C64.8698 75.5205 119.986 175.031 123.548 180.617L125.9 184.3L123.671 188.107C107.12 215.172 59.0978 303.033 48.5166 325.203C61.8649 330.331 99.5366 340.15 112.813 339.943C120.128 328.804 149.61 274.311 166.698 240.138L168.63 236.278Z" fill="#9B9B9B" />
        <path d="M11.3301 55.0224L23.282 35.8951L33.3759 53.6959C33.3759 53.6959 27.294 67.1491 26.7391 67.5175C26.1843 67.8858 11.3301 55.0224 11.3301 55.0224Z" fill="#9B9B9B" />
        <path d="M336.56 338.633L322.909 360.478L305.362 347.706L323.007 324.932L336.56 338.633Z" fill="#9B9B9B" />
    </svg>
    const grayO = <svg width="110" height="110" viewBox="0 0 230 265" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.499 35.7049C180.011 12.3437 152.669 0 120.422 0C96.2611 0 74.8836 7.31473 57.4137 21.3018C45.6627 27.9389 35.2208 37.1785 26.7127 48.4677C9.48619 71.1865 0 101.721 0 134.443C0 212.533 43.594 265 108.478 265C133.248 265 154.958 257.642 172.492 243.572C184.403 236.871 194.944 227.446 203.442 215.898C220.026 193.469 229.16 163.16 229.16 130.552C229.163 91.7646 218.905 58.9672 199.499 35.7049ZM121.215 237.209C64.8867 237.209 29.7177 192.218 29.7177 125.78C29.7177 91.669 41.7944 58.0602 65.9831 37.9523C79.0124 31.0265 93.2749 27.5491 107.68 27.786C163.213 27.786 199.443 69.7918 199.443 139.215C199.443 172.709 188.22 206.664 163.849 226.997C151.988 233.451 137.839 237.209 121.215 237.209Z" fill="#9B9B9B" />
        <path d="M121.215 67.6831C110.1 67.6831 100.969 71.7046 94.0509 78.9715C75.8892 86.1523 65.8965 107.61 65.8965 137.416C65.8965 170.789 82.0252 197.005 107.412 197.005C118.796 197.005 127.736 193.044 134.361 185.892C152.895 178.832 161.667 157.004 161.667 126.673C161.677 86.7533 144.75 67.6831 121.215 67.6831ZM120.157 169.219C103.295 169.219 95.6157 148.245 95.6157 128.757C95.6157 114.818 98.3038 103.184 103.193 95.9967V95.9887C104.935 95.6371 106.701 95.4632 108.47 95.469C124.053 95.469 131.956 108.881 131.956 135.329C131.956 152.554 129.035 162.803 125.11 168.903C123.468 169.145 121.812 169.251 120.157 169.219Z" fill="#9B9B9B" />
        <path d="M212.183 130.676C212.183 183.408 184.414 237.333 121.211 237.333C64.8828 237.333 29.7139 192.342 29.7139 125.904C29.7139 71.9803 59.8617 19.2471 120.418 19.2471C175.953 19.2471 212.183 61.2544 212.183 130.676ZM121.211 67.8073C93.9738 67.8073 78.6346 91.9399 78.6346 128.882C78.6346 162.256 94.7633 188.47 120.153 188.47C148.449 188.47 161.672 164.041 161.672 126.797C161.673 86.8775 144.748 67.8073 121.213 67.8073H121.211Z" fill="#9B9B9B" />
        <path d="M120.634 237.333C107.666 237.5 94.7949 234.787 82.7572 229.349C71.8302 224.311 62.0197 216.628 54.0199 206.845C45.8805 196.749 39.6518 184.891 35.7139 171.993C31.3102 157.501 29.0871 142.282 29.1365 126.964H78.0714C78.0629 127.568 78.0573 128.214 78.0573 128.877C78.0127 136.792 78.9955 144.672 80.9746 152.266C82.7271 159.08 85.5453 165.487 89.2964 171.185C92.7632 176.453 97.233 180.779 102.378 183.846C107.692 186.936 113.594 188.522 119.574 188.469C125.925 188.605 132.218 187.105 137.975 184.082C143.143 181.222 147.592 176.948 150.914 171.649C154.517 165.778 157.112 159.197 158.562 152.247C160.319 143.968 161.17 135.477 161.094 126.964H211.57C211.594 128.218 211.605 129.468 211.605 130.676C211.607 137.278 211.167 143.871 210.288 150.398C209.413 156.906 208.073 163.323 206.279 169.587C202.782 182.064 197.195 193.671 189.82 203.779C182.144 214.197 172.463 222.508 161.512 228.083C148.63 234.426 134.69 237.58 120.634 237.333Z" fill="#9B9B9B" />
        <path d="M120.636 242.115C91.9798 242.115 67.7713 230.926 50.6282 209.758C33.7922 188.966 24.8945 159.972 24.8945 125.906C24.8945 72.2337 54.6052 14.4668 119.843 14.4668C148.487 14.4668 172.622 25.2516 189.642 45.6544C206.788 66.2165 215.849 95.6092 215.849 130.68C215.849 159.939 207.764 186.986 193.082 206.843C176.019 229.917 150.967 242.115 120.636 242.115ZM119.843 24.029C60.4384 24.029 33.3833 76.8387 33.3833 125.904C33.3833 190.689 67.6312 232.552 120.636 232.552C180.545 232.552 207.363 181.385 207.363 130.678C207.361 64.8952 173.826 24.029 119.843 24.029ZM119.578 193.252C92.6335 193.252 73.8153 166.781 73.8153 128.882C73.8153 88.2595 91.7549 63.0254 120.636 63.0254C148.63 63.0254 165.344 86.8648 165.344 126.797C165.341 169.031 148.661 193.252 119.578 193.252ZM120.636 72.5892C96.6331 72.5892 82.3041 93.6296 82.3041 128.882C82.3041 161.152 97.6319 183.689 119.578 183.689C136.583 183.689 156.852 173.819 156.852 126.797C156.852 92.3464 143.652 72.5892 120.636 72.5892Z" fill="#9B9B9B" />
    </svg>


    return (
        <div className={style.ChoosePlayer}>
            <ButtonBack />
            <div className={style.withoutbuttonback}>
                <br />
                <br />
                <Title content={"Choose Player"} />
                <br />
                <br />
                <Board height={"170px"} width={"95%"}>
                    <div className={style.x} onClick={onclickX}>
                        <Cell colorCell={isActive == 'X' ? '#C9F9FC' : '#cccccc'} height={"135px"} width={"135px"}>
                            {isActive == null || isActive == 'O' ? grayX : <X width={isActive == 'X' ? "110%" : "80%"} height={isActive == 'X' ? "110%" : "80%"} />}
                        </Cell>
                    </div>
                    <div className={style.x} onClick={onclickO}>
                        <Cell colorCell={isActive == 'O' ? '#C9F9FC' : '#cccccc'} height={"135px"} width={"135px"}>
                            {isActive == null || isActive == 'X' ? grayO : <O width={isActive == 'O' ? "110%" : "80%"} height={isActive == 'O' ? "110%" : "80%"} />}
                        </Cell>
                    </div>
                </Board>
                <br /><br /><br />
                {typeof isActive == "string" ? <Button content={"Let's Play!"} /> : null}
            </div>
        </div>
    )
}
