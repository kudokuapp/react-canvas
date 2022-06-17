import React from "react";

export const KudokuLogo = ({ variant }) => {
    if (variant==='primary') {
        return (
            <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3L10.5236 2.44011C11.5061 1.90267 12.5323 1.44917 13.5911 1.08443C15.6755 0.366473 17.8646 0 20.0692 0H171.357C172.911 0 174.462 0.111074 176 0.332373L178.521 1.06815C179.505 1.35547 180.461 1.73067 181.378 2.18923L181.534 2.26702C182.509 2.75431 183.429 3.3432 184.28 4.02387C185.091 4.67297 185.835 5.40216 186.5 6.20039L188 8L189.665 10.6642C190.22 11.5516 190.667 12.5016 190.998 13.4944C191.332 14.4946 191.544 15.5309 191.632 16.5816L191.717 17.605C191.905 19.8547 191.742 22.1198 191.234 24.3195L190.975 25.4431C190.66 26.807 190.147 28.1175 189.453 29.3328C188.82 30.4393 188.043 31.4566 187.142 32.3578L185.5 34L110.5 92L108.778 93.2916C107.265 94.4261 105.617 95.3679 103.872 96.0951L103.278 96.3425C101.438 97.1093 99.4691 97.5793 97.4813 97.7322C95.1941 97.9081 92.8733 97.6601 90.6771 96.9976C88.9024 96.4623 87.2179 95.6641 85.6797 94.6296L84 93.5L8 35L6.03864 33.0386C5.34709 32.3471 4.70549 31.6073 4.11868 30.8249L3.63921 30.1856C2.55426 28.739 1.72253 27.1189 1.1794 25.3941C0.887326 24.4666 0.680461 23.5144 0.561374 22.5494L0.366195 20.9676C0.123852 19.0037 0.219384 17.0128 0.648654 15.0811C0.882376 14.0293 1.21359 13.0016 1.638 12.0113L2.5 10L2.99187 9.18022C3.66143 8.06429 4.46532 7.03468 5.38554 6.11446C6.1267 5.3733 6.93926 4.70716 7.81138 4.12575L9.5 3Z" fill="#348A95"/>
                <path d="M0.271655 16.8268L0 19V169.464C0 171.819 0.167086 174.17 0.5 176.5L1.11289 178.645C1.37041 179.546 1.71096 180.422 2.13016 181.26C2.70769 182.415 3.43042 183.492 4.2808 184.464L5.53839 185.901C6.1782 186.632 6.88159 187.305 7.6403 187.912C8.54424 188.635 9.52204 189.261 10.5574 189.779L10.8644 189.932C11.6205 190.31 12.4025 190.634 13.2045 190.901C14.3982 191.299 15.6305 191.57 16.8811 191.709L19.5 192H169.959C171.983 192 174.003 191.833 176 191.5L178.064 190.881C180.009 190.297 181.848 189.407 183.511 188.242L183.603 188.178C185.191 187.066 186.593 185.71 187.756 184.159C188.583 183.057 189.283 181.864 189.842 180.605L190.01 180.227C190.668 178.747 191.16 177.198 191.478 175.61L191.5 175.5L191.802 172.778C191.934 171.598 191.901 170.406 191.706 169.235C191.569 168.414 191.353 167.607 191.06 166.828L190 164C188.675 161.351 186.932 158.932 184.838 156.838L184 156L34.7678 6.76777C33.5907 5.59074 32.3317 4.49874 31 3.5L28.5 2C26.1793 1.00543 23.7248 0.358308 21.2154 0.0794895L20.5 0H19.5613C18.5222 0 17.4849 0.0858486 16.46 0.25667L16.379 0.270172C15.4611 0.423155 14.5566 0.647813 13.6737 0.942083C12.5606 1.31312 11.4869 1.7932 10.4682 2.37533L8.5 3.5L8.19706 3.72721C7.06711 4.57467 5.99874 5.50126 5 6.5L4.25404 7.43245C3.42035 8.47457 2.69224 9.61552 2.0954 10.8092C1.70196 11.5961 1.36037 12.4189 1.08217 13.2535C0.695003 14.415 0.423513 15.6119 0.271655 16.8268Z" fill="#345995"/>
            </svg>
          )
    }

    else if (variant==='secondary') {
        return (
            <svg width="500" height="73" viewBox="0 0 500 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96031 0C10.0369 0.0768935 11.8059 0.845829 13.2672 2.30681C14.7285 3.69089 15.4976 5.42099 15.5745 7.49712V64.0138C15.1131 68.6274 12.575 71.1265 7.96031 71.511C5.8068 71.511 3.92247 70.8189 2.30734 69.4348C0.769112 67.9739 0 66.1669 0 64.0138V7.49712C0.0769112 5.3441 0.884479 3.57555 2.4227 2.19146C3.96093 0.730488 5.8068 0 7.96031 0ZM27.688 20.2999C32.8411 16.8397 39.8016 13.341 48.5695 9.80392L67.4896 1.7301C68.3356 1.34564 69.2586 1.11496 70.2584 1.03806C72.4119 0.884275 74.2578 1.53787 75.796 2.99885C77.3343 4.38293 78.1034 6.18993 78.1034 8.41984C78.1034 10.9573 77.565 12.8412 76.4882 14.0715C75.4884 15.2249 74.1809 16.1861 72.5658 16.955L56.4144 23.0681C53.261 24.2983 50.2615 25.5286 47.4158 26.7589C44.647 27.9123 42.1089 29.258 39.8016 30.7958C37.4942 32.1799 36.2637 33.7562 36.1098 35.5248C36.2637 37.2165 37.4942 38.7928 39.8016 40.2537C42.1089 41.7916 44.647 43.1757 47.4158 44.406C50.2615 45.5594 53.261 46.7512 56.4144 47.9815L74.4116 54.5559C76.0268 55.3249 77.3343 56.3245 78.3341 57.5548C79.4109 58.7082 79.9492 60.5536 79.9492 63.0911C79.9492 65.321 79.1801 67.1665 77.6419 68.6274C76.1037 70.0115 74.2578 70.6267 72.1043 70.4729C71.1044 70.396 70.1815 70.1653 69.3355 69.7809L48.5695 61.2457C39.8016 57.7086 32.8026 54.2099 27.5727 50.7497C22.4196 47.2126 19.8046 42.1376 19.7277 35.5248C19.8046 28.912 22.4581 23.837 27.688 20.2999Z" fill="#345995"/>
                <path d="M122.497 72.549C118.497 72.549 114.536 72.0877 110.614 71.1649C106.768 70.2422 103.076 68.8966 99.5385 67.128C96.0006 65.2826 92.8857 62.8604 90.1938 59.8616C87.5019 56.8627 86.0406 53.2872 85.8099 49.1349V7.49712C85.8099 5.3441 86.579 3.57555 88.1172 2.19146C89.7323 0.730488 91.6167 0 93.7702 0C98.3849 0.384468 100.884 2.88351 101.269 7.49712V45.5594C101.423 47.9431 102.307 49.9423 103.922 51.5571C105.615 53.095 107.46 54.3253 109.46 55.248C111.537 56.1707 113.652 56.8627 115.805 57.3241C118.036 57.7855 120.266 58.0161 122.497 58.0161C124.727 58.0161 126.919 57.7855 129.072 57.3241C131.303 56.8627 133.418 56.1707 135.418 55.248C137.494 54.3253 139.34 53.095 140.955 51.5571C142.647 49.9423 143.57 47.9431 143.724 45.5594V7.49712C143.724 5.3441 144.493 3.57555 146.031 2.19146C147.647 0.730488 149.531 0 151.684 0C156.299 0.384468 158.837 2.88351 159.299 7.49712V49.1349C159.068 53.2872 157.568 56.8627 154.799 59.8616C152.107 62.8604 148.992 65.2826 145.455 67.128C141.917 68.8966 138.186 70.2422 134.264 71.1649C130.418 72.0877 126.496 72.549 122.497 72.549Z" fill="#345995"/>
                <path d="M348.662 0C350.738 0.0768935 352.507 0.845829 353.969 2.30681C355.43 3.69089 356.199 5.42099 356.276 7.49712V64.0138C355.814 68.6274 353.276 71.1265 348.662 71.511C346.508 71.511 344.624 70.8189 343.009 69.4348C341.471 67.9739 340.701 66.1669 340.701 64.0138V7.49712C340.778 5.3441 341.586 3.57555 343.124 2.19146C344.662 0.730488 346.508 0 348.662 0ZM368.389 20.2999C373.543 16.8397 380.503 13.341 389.271 9.80392L408.191 1.7301C409.037 1.34564 409.96 1.11496 410.96 1.03806C413.113 0.884275 414.959 1.53787 416.497 2.99885C418.036 4.38293 418.805 6.18993 418.805 8.41984C418.805 10.9573 418.266 12.8412 417.19 14.0715C416.19 15.2249 414.882 16.1861 413.267 16.955L397.116 23.0681C393.962 24.2983 390.963 25.5286 388.117 26.7589C385.348 27.9123 382.81 29.258 380.503 30.7958C378.196 32.1799 376.965 33.7562 376.811 35.5248C376.965 37.2165 378.196 38.7928 380.503 40.2537C382.81 41.7916 385.348 43.1757 388.117 44.406C390.963 45.5594 393.962 46.7512 397.116 47.9815L415.113 54.5559C416.728 55.3249 418.036 56.3245 419.036 57.5548C420.112 58.7082 420.651 60.5536 420.651 63.0911C420.651 65.321 419.882 67.1665 418.343 68.6274C416.805 70.0115 414.959 70.6267 412.806 70.4729C411.806 70.396 410.883 70.1653 410.037 69.7809L389.271 61.2457C380.503 57.7086 373.504 54.2099 368.274 50.7497C363.121 47.2126 360.506 42.1376 360.429 35.5248C360.506 28.912 363.16 23.837 368.389 20.2999Z" fill="#345995"/>
                <path d="M463.198 72.549C459.199 72.549 455.238 72.0877 451.315 71.1649C447.47 70.2422 443.778 68.8966 440.24 67.128C436.702 65.2826 433.587 62.8604 430.895 59.8616C428.203 56.8627 426.742 53.2872 426.511 49.1349V7.49712C426.511 5.3441 427.28 3.57555 428.819 2.19146C430.434 0.730488 432.318 0 434.472 0C439.086 0.384468 441.586 2.88351 441.97 7.49712V45.5594C442.124 47.9431 443.009 49.9423 444.624 51.5571C446.316 53.095 448.162 54.3253 450.161 55.248C452.238 56.1707 454.353 56.8627 456.507 57.3241C458.737 57.7855 460.968 58.0161 463.198 58.0161C465.428 58.0161 467.62 57.7855 469.774 57.3241C472.004 56.8627 474.119 56.1707 476.119 55.248C478.196 54.3253 480.042 53.095 481.657 51.5571C483.349 49.9423 484.272 47.9431 484.425 45.5594V7.49712C484.425 5.3441 485.195 3.57555 486.733 2.19146C488.348 0.730488 490.232 0 492.386 0C497 0.384468 499.539 2.88351 500 7.49712V49.1349C499.769 53.2872 498.27 56.8627 495.501 59.8616C492.809 62.8604 489.694 65.2826 486.156 67.128C482.618 68.8966 478.888 70.2422 474.965 71.1649C471.12 72.0877 467.197 72.549 463.198 72.549Z" fill="#345995"/>
                <path d="M218.805 1.84544C224.189 2.15302 228.611 4.22914 232.072 8.07382C235.533 11.8416 238.033 16.1476 239.571 20.9919C241.109 25.8362 241.878 30.7958 241.878 35.8708C241.878 40.9458 241.109 45.9054 239.571 50.7497C238.11 55.594 235.61 59.9385 232.072 63.7832C228.611 67.5509 224.189 69.5886 218.805 69.8962H176.35C174.273 69.8193 172.504 69.0888 171.043 67.7047C169.659 66.2438 168.928 64.4752 168.851 62.3991V33.7947C168.928 31.6417 169.735 29.8731 171.274 28.489C172.812 27.0281 174.658 26.2976 176.811 26.2976C178.888 26.3745 180.657 27.1434 182.118 28.6044C183.579 29.9885 184.349 31.7186 184.425 33.7947V51.3264C184.425 53.4025 185.502 54.4406 187.656 54.4406H214.882C217.805 54.2868 220.228 53.1719 222.15 51.0957C224.073 49.0196 225.458 46.6744 226.304 44.06C227.227 41.3687 227.688 38.639 227.688 35.8708C227.688 33.1027 227.227 30.4114 226.304 27.797C225.458 25.1057 224.073 22.722 222.15 20.6459C220.228 18.5698 217.805 17.4548 214.882 17.301H176.35C171.735 16.9166 169.236 14.4175 168.851 9.80392C168.851 7.6509 169.543 5.80546 170.928 4.26759C172.389 2.72972 174.196 1.92234 176.35 1.84544H218.805Z" fill="#348A95"/>
                <path d="M310.498 1.84544C314.421 1.92234 317.92 3.15263 320.997 5.53633C324.073 7.92003 326.534 10.7651 328.38 14.0715C330.303 17.3779 331.726 20.8766 332.649 24.5675C333.572 28.2584 334.033 32.0261 334.033 35.8708C334.033 40.9458 333.226 45.9439 331.611 50.8651C330.072 55.7093 327.496 60.0154 323.881 63.7832C320.343 67.5509 315.882 69.5886 310.498 69.8962H270.235C264.852 69.6655 260.352 67.6663 256.737 63.8985C253.123 60.1307 250.546 55.7862 249.008 50.8651C247.547 45.9439 246.816 40.9458 246.816 35.8708C246.816 30.7958 247.585 25.8362 249.123 20.9919C250.661 16.0707 253.199 11.7263 256.737 7.95848C260.352 4.1138 264.852 2.07612 270.235 1.84544H310.498ZM306.576 54.4406C309.499 54.2868 311.921 53.2103 313.844 51.2111C315.844 49.1349 317.267 46.7512 318.113 44.06C318.959 41.3687 319.382 38.639 319.382 35.8708C319.382 33.1027 318.92 30.4114 317.997 27.797C317.151 25.1057 315.767 22.722 313.844 20.6459C311.921 18.5698 309.499 17.4548 306.576 17.301H273.812C270.889 17.4548 268.466 18.5698 266.544 20.6459C264.621 22.722 263.198 25.1057 262.275 27.797C261.429 30.4114 261.006 33.1027 261.006 35.8708C261.006 38.639 261.429 41.3687 262.275 44.06C263.121 46.7512 264.505 49.1349 266.428 51.2111C268.428 53.2103 270.889 54.2868 273.812 54.4406H306.576Z" fill="#348A95"/>
            </svg>
        )
    }

    else if (variant==='variant1') {
        return (
            <svg width="192" height="238" viewBox="0 0 192 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_13_718)">
                <path d="M9.5 3.54815L10.5234 2.98849C11.5061 2.45116 12.5323 1.99775 13.5912 1.63311C15.6755 0.915367 17.8646 0.549011 20.069 0.549011H171.357C172.911 0.549011 174.462 0.660054 176 0.881289L178.521 1.61689C179.505 1.9041 180.461 2.27917 181.378 2.73758L181.534 2.81546C182.509 3.30256 183.429 3.89123 184.28 4.57167C185.091 5.22062 185.835 5.94967 186.5 6.74777L188 8.54671L189.665 11.2103C190.22 12.0973 190.667 13.047 190.998 14.0395C191.332 15.0394 191.544 16.0755 191.632 17.1259L191.717 18.149C191.905 20.398 191.742 22.6625 191.234 24.8615L190.975 25.9846C190.66 27.3482 190.147 28.6585 189.453 29.8735C188.82 30.9796 188.043 31.9965 187.142 32.8973L185.5 34.5393L110.5 92.5226L108.778 93.8137C107.265 94.948 105.617 95.8895 103.872 96.6166L103.278 96.8638C101.438 97.6304 99.469 98.1003 97.4812 98.2532C95.1941 98.4291 92.8734 98.1811 90.6772 97.5188C88.9024 96.9836 87.2178 96.1856 85.6794 95.1513L84 94.0222L8 35.539L6.03851 33.578C5.34704 32.8868 4.70551 32.1473 4.11876 31.3652L3.63903 30.7257C2.5542 29.2797 1.72254 27.6601 1.17943 25.9359C0.887335 25.0087 0.680455 24.0567 0.561359 23.0918L0.366205 21.5107C0.123857 19.5473 0.21939 17.5569 0.648666 15.6257C0.88238 14.5743 1.21358 13.5469 1.63796 12.557L2.5 10.5461L2.99174 9.7268C3.66139 8.61105 4.46535 7.58164 5.38562 6.66163C6.12673 5.92074 6.9392 5.25486 7.81121 4.67368L9.5 3.54815Z" fill="#348A95"/>
                <path d="M0.271644 17.371L0 19.5436V169.965C0 172.318 0.167087 174.669 0.5 176.998L1.11286 179.143C1.3704 180.044 1.71097 180.919 2.1302 181.757C2.7077 182.912 3.43037 183.988 4.28066 184.96L5.53829 186.397C6.17817 187.128 6.88162 187.801 7.64036 188.407C8.54426 189.13 9.52199 189.756 10.5573 190.273L10.8643 190.427C11.6205 190.805 12.4025 191.128 13.2045 191.396C14.3982 191.793 15.6305 192.064 16.881 192.203L19.5 192.494H169.959C171.983 192.494 174.003 192.327 176 191.994L178.065 191.375C180.009 190.792 181.848 189.901 183.511 188.738L183.603 188.673C185.191 187.562 186.593 186.206 187.756 184.655C188.583 183.553 189.283 182.361 189.842 181.102L190.01 180.725C190.668 179.245 191.16 177.696 191.478 176.108L191.5 175.999L191.802 173.278C191.934 172.098 191.901 170.906 191.706 169.735C191.569 168.914 191.353 168.108 191.06 167.329L190 164.502C188.675 161.853 186.932 159.436 184.838 157.342L184 156.504L34.7678 7.31491C33.5908 6.13817 32.3317 5.04646 31 4.04801L28.5 2.54844C26.1793 1.55415 23.7248 0.907223 21.2156 0.628495L20.5 0.549011H19.5612C18.5222 0.549011 17.4849 0.634834 16.46 0.805603L16.3789 0.819118C15.461 0.97205 14.5566 1.19663 13.6738 1.49081C12.5607 1.86175 11.4869 2.34172 10.4681 2.92372L8.5 4.04801L8.19699 4.2752C7.06709 5.12238 5.99874 6.04869 5 7.04714L4.25393 7.97946C3.42031 9.02119 2.69221 10.1618 2.09539 11.3551C1.70198 12.1417 1.36038 12.9643 1.08218 13.7987C0.695008 14.9598 0.42351 16.1565 0.271644 17.371Z" fill="#345995"/>
                <path d="M3.05676 209.307C3.85418 209.336 4.53346 209.633 5.0946 210.196C5.65575 210.73 5.95108 211.397 5.98062 212.198V233.995C5.80341 235.774 4.8288 236.738 3.05676 236.887C2.22981 236.887 1.50623 236.62 0.886018 236.086C0.295339 235.522 0 234.825 0 233.995V212.198C0.0295339 211.368 0.33964 210.686 0.930318 210.152C1.521 209.588 2.22981 209.307 3.05676 209.307ZM10.6322 217.136C12.611 215.801 15.2838 214.452 18.6507 213.088L25.916 209.974C26.2409 209.826 26.5953 209.737 26.9792 209.707C27.8062 209.648 28.515 209.9 29.1057 210.463C29.6964 210.997 29.9917 211.694 29.9917 212.554C29.9917 213.533 29.785 214.259 29.3715 214.734C28.9875 215.178 28.4855 215.549 27.8653 215.846L21.6631 218.203C20.4522 218.678 19.3004 219.152 18.2077 219.627C17.1444 220.072 16.1698 220.591 15.2838 221.184C14.3978 221.718 13.9252 222.326 13.8662 223.008C13.9252 223.66 14.3978 224.268 15.2838 224.831C16.1698 225.425 17.1444 225.958 18.2077 226.433C19.3004 226.878 20.4522 227.337 21.6631 227.812L28.5741 230.347C29.1943 230.644 29.6964 231.029 30.0803 231.504C30.4938 231.949 30.7005 232.661 30.7005 233.639C30.7005 234.499 30.4052 235.211 29.8145 235.774C29.2238 236.308 28.515 236.545 27.688 236.486C27.3041 236.457 26.9497 236.368 26.6248 236.219L18.6507 232.927C15.2838 231.563 12.5962 230.214 10.5879 228.879C8.60914 227.515 7.60498 225.558 7.57545 223.008C7.60498 220.457 8.6239 218.5 10.6322 217.136Z" fill="#345995"/>
                <path d="M47.0387 237.287C45.5029 237.287 43.9819 237.109 42.4757 236.753C40.999 236.397 39.5814 235.878 38.2228 235.196C36.8642 234.484 35.6681 233.55 34.6344 232.394C33.6007 231.237 33.0396 229.858 32.951 228.257V212.198C32.951 211.368 33.2463 210.686 33.837 210.152C34.4572 209.588 35.1808 209.307 36.0078 209.307C37.7798 209.455 38.7396 210.419 38.8873 212.198V226.878C38.9464 227.797 39.286 228.568 39.9062 229.191C40.556 229.784 41.2648 230.258 42.0327 230.614C42.8301 230.97 43.6423 231.237 44.4692 231.415C45.3257 231.593 46.1822 231.682 47.0387 231.682C47.8952 231.682 48.7369 231.593 49.5638 231.415C50.4203 231.237 51.2325 230.97 52.0004 230.614C52.7978 230.258 53.5066 229.784 54.1268 229.191C54.7766 228.568 55.131 227.797 55.19 226.878V212.198C55.19 211.368 55.4854 210.686 56.076 210.152C56.6963 209.588 57.4198 209.307 58.2468 209.307C60.0188 209.455 60.9935 210.419 61.1707 212.198V228.257C61.0821 229.858 60.5061 231.237 59.4429 232.394C58.4092 233.55 57.2131 234.484 55.8545 235.196C54.496 235.878 53.0636 236.397 51.5574 236.753C50.0807 237.109 48.5744 237.287 47.0387 237.287Z" fill="#345995"/>
                <path d="M133.886 209.307C134.684 209.336 135.363 209.633 135.924 210.196C136.485 210.73 136.78 211.397 136.81 212.198V233.995C136.633 235.774 135.658 236.738 133.886 236.887C133.059 236.887 132.336 236.62 131.715 236.086C131.125 235.522 130.829 234.825 130.829 233.995V212.198C130.859 211.368 131.169 210.686 131.76 210.152C132.35 209.588 133.059 209.307 133.886 209.307ZM141.462 217.136C143.44 215.801 146.113 214.452 149.48 213.088L156.745 209.974C157.07 209.826 157.425 209.737 157.809 209.707C158.636 209.648 159.344 209.9 159.935 210.463C160.526 210.997 160.821 211.694 160.821 212.554C160.821 213.533 160.614 214.259 160.201 214.734C159.817 215.178 159.315 215.549 158.695 215.846L152.492 218.203C151.282 218.678 150.13 219.152 149.037 219.627C147.974 220.072 146.999 220.591 146.113 221.184C145.227 221.718 144.755 222.326 144.696 223.008C144.755 223.66 145.227 224.268 146.113 224.831C146.999 225.425 147.974 225.958 149.037 226.433C150.13 226.878 151.282 227.337 152.492 227.812L159.403 230.347C160.024 230.644 160.526 231.029 160.91 231.504C161.323 231.949 161.53 232.661 161.53 233.639C161.53 234.499 161.235 235.211 160.644 235.774C160.053 236.308 159.344 236.545 158.517 236.486C158.133 236.457 157.779 236.368 157.454 236.219L149.48 232.927C146.113 231.563 143.426 230.214 141.417 228.879C139.438 227.515 138.434 225.558 138.405 223.008C138.434 220.457 139.453 218.5 141.462 217.136Z" fill="#345995"/>
                <path d="M177.868 237.287C176.332 237.287 174.811 237.109 173.305 236.753C171.828 236.397 170.411 235.878 169.052 235.196C167.694 234.484 166.497 233.55 165.464 232.394C164.43 231.237 163.869 229.858 163.78 228.257V212.198C163.78 211.368 164.076 210.686 164.666 210.152C165.287 209.588 166.01 209.307 166.837 209.307C168.609 209.455 169.569 210.419 169.717 212.198V226.878C169.776 227.797 170.115 228.568 170.736 229.191C171.385 229.784 172.094 230.258 172.862 230.614C173.659 230.97 174.472 231.237 175.299 231.415C176.155 231.593 177.012 231.682 177.868 231.682C178.725 231.682 179.566 231.593 180.393 231.415C181.25 231.237 182.062 230.97 182.83 230.614C183.627 230.258 184.336 229.784 184.956 229.191C185.606 228.568 185.96 227.797 186.019 226.878V212.198C186.019 211.368 186.315 210.686 186.905 210.152C187.526 209.588 188.249 209.307 189.076 209.307C190.848 209.455 191.823 210.419 192 212.198V228.257C191.911 229.858 191.335 231.237 190.272 232.394C189.239 233.55 188.042 234.484 186.684 235.196C185.325 235.878 183.893 236.397 182.387 236.753C180.91 237.109 179.404 237.287 177.868 237.287Z" fill="#345995"/>
                <path d="M84.021 210.018C86.0884 210.137 87.7866 210.938 89.1156 212.42C90.4447 213.874 91.4045 215.534 91.9952 217.403C92.5859 219.271 92.8812 221.184 92.8812 223.141C92.8812 225.098 92.5859 227.011 91.9952 228.879C91.4341 230.748 90.4742 232.423 89.1156 233.906C87.7866 235.359 86.0884 236.145 84.021 236.264H67.7183C66.9209 236.234 66.2416 235.952 65.6805 235.419C65.1489 234.855 64.8683 234.173 64.8388 233.372V222.34C64.8683 221.51 65.1784 220.828 65.7691 220.294C66.3598 219.731 67.0686 219.449 67.8955 219.449C68.6929 219.479 69.3722 219.775 69.9334 220.339C70.4945 220.872 70.7898 221.54 70.8194 222.34V229.102C70.8194 229.903 71.2329 230.303 72.0598 230.303H82.5148C83.6371 230.244 84.5674 229.814 85.3058 229.013C86.0441 228.212 86.5757 227.308 86.9006 226.299C87.255 225.261 87.4322 224.209 87.4322 223.141C87.4322 222.073 87.255 221.035 86.9006 220.027C86.5757 218.989 86.0441 218.07 85.3058 217.269C84.5674 216.468 83.6371 216.038 82.5148 215.979H67.7183C65.9463 215.831 64.9864 214.867 64.8388 213.088C64.8388 212.257 65.1046 211.546 65.6362 210.952C66.1973 210.359 66.8914 210.048 67.7183 210.018H84.021Z" fill="#348A95"/>
                <path d="M119.231 210.018C120.738 210.048 122.081 210.522 123.263 211.442C124.444 212.361 125.389 213.458 126.098 214.734C126.836 216.009 127.383 217.358 127.737 218.782C128.092 220.205 128.269 221.658 128.269 223.141C128.269 225.098 127.959 227.026 127.338 228.924C126.748 230.792 125.758 232.453 124.37 233.906C123.012 235.359 121.299 236.145 119.231 236.264H103.77C101.703 236.175 99.9753 235.404 98.5872 233.951C97.1991 232.497 96.2097 230.822 95.619 228.924C95.0579 227.026 94.7773 225.098 94.7773 223.141C94.7773 221.184 95.0726 219.271 95.6633 217.403C96.254 215.505 97.2286 213.829 98.5872 212.376C99.9753 210.893 101.703 210.107 103.77 210.018H119.231ZM117.725 230.303C118.847 230.244 119.778 229.828 120.516 229.057C121.284 228.257 121.83 227.337 122.155 226.299C122.48 225.261 122.643 224.209 122.643 223.141C122.643 222.073 122.465 221.035 122.111 220.027C121.786 218.989 121.254 218.07 120.516 217.269C119.778 216.468 118.847 216.038 117.725 215.979H105.144C104.021 216.038 103.091 216.468 102.353 217.269C101.614 218.07 101.068 218.989 100.714 220.027C100.389 221.035 100.226 222.073 100.226 223.141C100.226 224.209 100.389 225.261 100.714 226.299C101.038 227.337 101.57 228.257 102.308 229.057C103.076 229.828 104.021 230.244 105.144 230.303H117.725Z" fill="#348A95"/>
                </g>
                <defs>
                <clipPath id="clip0_13_718">
                <rect width="192" height="236.738" fill="white" transform="translate(0 0.549011)"/>
                </clipPath>
                </defs>
            </svg>
        )
    }

    else if (variant==='variant2') {
        return (
            <svg width="910" height="193" viewBox="0 0 910 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.49994 3.28687L10.5235 2.72697C11.506 2.18953 12.5322 1.73603 13.591 1.3713C15.6754 0.653339 17.8645 0.286865 20.069 0.286865H171.356C172.91 0.286865 174.461 0.397939 175.999 0.619239L178.519 1.35501C179.504 1.64233 180.46 2.01754 181.377 2.47609L181.533 2.55388C182.507 3.04117 183.428 3.63006 184.279 4.31074C185.09 4.95984 185.834 5.68903 186.499 6.48726L187.999 8.28687L189.664 10.9511C190.218 11.8385 190.666 12.7885 190.997 13.7813C191.33 14.7814 191.543 15.8178 191.63 16.8684L191.716 17.8919C191.903 20.1416 191.74 22.4067 191.233 24.6063L190.973 25.73C190.659 27.0939 190.146 28.4044 189.451 29.6197C188.819 30.7262 188.042 31.7435 187.141 32.6446L185.499 34.2869L110.499 92.2869L108.777 93.5785C107.264 94.713 105.616 95.6547 103.871 96.382L103.277 96.6293C101.437 97.3961 99.4684 97.8662 97.4807 98.0191C95.1934 98.195 92.8727 97.947 90.6764 97.2845C88.9018 96.7491 87.2173 95.951 85.6791 94.9165L83.9994 93.7869L7.99995 35.2869L6.0386 33.3255C5.34705 32.634 4.70545 31.8942 4.11865 31.1118L3.63919 30.4725C2.55425 29.0259 1.72252 27.4058 1.17939 25.681C0.887319 24.7535 0.680456 23.8013 0.561371 22.8362L0.366192 21.2545C0.123851 19.2906 0.219383 17.2996 0.648649 15.3679C0.88237 14.3162 1.21358 13.2885 1.63799 12.2982L2.49998 10.2869L2.99185 9.46708C3.66141 8.35115 4.46529 7.32155 5.3855 6.40132C6.12666 5.66016 6.93921 4.99403 7.81133 4.41261L9.49994 3.28687Z" fill="#348A95"/>
                <path d="M0.271653 17.1136L0 19.2869V169.751C0 172.105 0.167085 174.456 0.499997 176.787L1.11289 178.932C1.3704 179.833 1.71095 180.709 2.13015 181.547C2.70767 182.702 3.43039 183.779 4.28077 184.751L5.53836 186.188C6.17816 186.919 6.88155 187.592 7.64024 188.199C8.54418 188.922 9.52198 189.548 10.5574 190.066L10.8643 190.219C11.6204 190.597 12.4024 190.921 13.2044 191.188C14.3981 191.586 15.6304 191.857 16.881 191.996L19.4999 192.287H169.957C171.982 192.287 174.002 192.12 175.999 191.787L178.063 191.168C180.008 190.584 181.846 189.694 183.51 188.529L183.601 188.465C185.19 187.353 186.591 185.997 187.754 184.446C188.581 183.343 189.281 182.151 189.841 180.892L190.009 180.514C190.667 179.034 191.159 177.485 191.477 175.897L191.499 175.787L191.801 173.065C191.932 171.885 191.9 170.693 191.705 169.522C191.568 168.7 191.351 167.894 191.059 167.115L189.999 164.287C188.674 161.638 186.931 159.219 184.836 157.125L183.999 156.287L34.7675 7.05463C33.5905 5.87761 32.3314 4.78561 30.9998 3.78687L28.4998 2.28687C26.1792 1.2923 23.7246 0.645173 21.2153 0.366354L20.4999 0.286865H19.5611C18.5221 0.286865 17.4848 0.372714 16.4599 0.543535L16.3789 0.557037C15.461 0.710021 14.5565 0.934679 13.6737 1.22895C12.5606 1.59999 11.4868 2.08007 10.4681 2.6622L8.49994 3.78687L8.197 4.01407C7.06706 4.86153 5.9987 5.78813 4.99997 6.78687L4.25402 7.71931C3.42032 8.76143 2.69222 9.90239 2.09539 11.0961C1.70195 11.8829 1.36036 12.7057 1.08216 13.5404C0.694998 14.7019 0.423511 15.8988 0.271653 17.1136Z" fill="#345995"/>
                <path d="M258.754 48.2869C261.502 48.3886 263.843 49.4061 265.777 51.3393C267.71 53.1708 268.728 55.4602 268.83 58.2074V132.993C268.219 139.098 264.861 142.405 258.754 142.913C255.905 142.913 253.411 141.998 251.274 140.166C249.239 138.233 248.221 135.842 248.221 132.993V58.2074C248.323 55.3584 249.391 53.0182 251.427 51.1867C253.462 49.2535 255.905 48.2869 258.754 48.2869ZM284.859 75.1486C291.677 70.5699 300.888 65.9403 312.49 61.2598L337.526 50.5762C338.645 50.0675 339.866 49.7622 341.189 49.6605C344.039 49.457 346.481 50.3218 348.517 52.2551C350.552 54.0865 351.57 56.4776 351.57 59.4284C351.57 62.7861 350.858 65.2789 349.433 66.9069C348.11 68.4331 346.38 69.705 344.242 70.7225L322.87 78.8115C318.698 80.4395 314.729 82.0675 310.963 83.6955C307.299 85.2217 303.941 87.0023 300.888 89.0373C297.835 90.8688 296.206 92.9546 296.003 95.2948C296.206 97.5333 297.835 99.6191 300.888 101.552C303.941 103.587 307.299 105.419 310.963 107.047C314.729 108.573 318.698 110.15 322.87 111.778L346.685 120.478C348.822 121.495 350.552 122.818 351.875 124.446C353.3 125.972 354.013 128.414 354.013 131.772C354.013 134.722 352.995 137.164 350.959 139.098C348.924 140.929 346.481 141.743 343.632 141.54C342.309 141.438 341.088 141.133 339.968 140.624L312.49 129.33C300.888 124.649 291.627 120.02 284.706 115.441C277.887 110.761 274.427 104.045 274.325 95.2948C274.427 86.5444 277.938 79.829 284.859 75.1486Z" fill="#345995"/>
                <path d="M410.313 144.287C405.02 144.287 399.779 143.676 394.589 142.455C389.5 141.234 384.615 139.454 379.934 137.114C375.252 134.672 371.131 131.467 367.568 127.498C364.006 123.53 362.073 118.799 361.768 113.304V58.2074C361.768 55.3584 362.785 53.0182 364.821 51.1867C366.958 49.2535 369.451 48.2869 372.301 48.2869C378.407 48.7956 381.715 52.1024 382.224 58.2074V108.573C382.427 111.727 383.598 114.373 385.735 116.509C387.974 118.544 390.416 120.172 393.062 121.393C395.81 122.614 398.609 123.53 401.458 124.141C404.41 124.751 407.361 125.056 410.313 125.056C413.264 125.056 416.164 124.751 419.014 124.141C421.965 123.53 424.764 122.614 427.41 121.393C430.158 120.172 432.601 118.544 434.738 116.509C436.977 114.373 438.198 111.727 438.402 108.573V58.2074C438.402 55.3584 439.419 53.0182 441.455 51.1867C443.592 49.2535 446.085 48.2869 448.935 48.2869C455.041 48.7956 458.4 52.1024 459.01 58.2074V113.304C458.705 118.799 456.72 123.53 453.057 127.498C449.495 131.467 445.373 134.672 440.691 137.114C436.01 139.454 431.074 141.234 425.884 142.455C420.795 143.676 415.605 144.287 410.313 144.287Z" fill="#345995"/>
                <path d="M709.582 48.2869C712.33 48.3886 714.671 49.4061 716.604 51.3393C718.538 53.1708 719.556 55.4602 719.657 58.2074V132.993C719.047 139.098 715.688 142.405 709.582 142.913C706.732 142.913 704.239 141.998 702.102 140.166C700.066 138.233 699.049 135.842 699.049 132.993V58.2074C699.15 55.3584 700.219 53.0182 702.255 51.1867C704.29 49.2535 706.732 48.2869 709.582 48.2869ZM735.687 75.1486C742.505 70.5699 751.716 65.9403 763.317 61.2598L788.353 50.5762C789.473 50.0675 790.694 49.7622 792.017 49.6605C794.867 49.457 797.309 50.3218 799.345 52.2551C801.38 54.0865 802.398 56.4776 802.398 59.4284C802.398 62.7861 801.685 65.2789 800.261 66.9069C798.938 68.4331 797.207 69.705 795.07 70.7225L773.698 78.8115C769.526 80.4395 765.556 82.0675 761.791 83.6955C758.127 85.2217 754.769 87.0023 751.716 89.0373C748.662 90.8688 747.034 92.9546 746.83 95.2948C747.034 97.5333 748.662 99.6191 751.716 101.552C754.769 103.587 758.127 105.419 761.791 107.047C765.556 108.573 769.526 110.15 773.698 111.778L797.513 120.478C799.65 121.495 801.38 122.818 802.703 124.446C804.128 125.972 804.84 128.414 804.84 131.772C804.84 134.722 803.823 137.164 801.787 139.098C799.752 140.929 797.309 141.743 794.46 141.54C793.137 141.438 791.915 141.133 790.796 140.624L763.317 129.33C751.716 124.649 742.454 120.02 735.534 115.441C728.715 110.761 725.255 104.045 725.153 95.2948C725.255 86.5444 728.766 79.829 735.687 75.1486Z" fill="#345995"/>
                <path d="M861.14 144.287C855.848 144.287 850.607 143.676 845.417 142.455C840.328 141.234 835.443 139.454 830.761 137.114C826.08 134.672 821.958 131.467 818.396 127.498C814.834 123.53 812.901 118.799 812.595 113.304V58.2074C812.595 55.3584 813.613 53.0182 815.648 51.1867C817.786 49.2535 820.279 48.2869 823.129 48.2869C829.235 48.7956 832.542 52.1024 833.051 58.2074V108.573C833.255 111.727 834.425 114.373 836.562 116.509C838.801 118.544 841.244 120.172 843.89 121.393C846.638 122.614 849.437 123.53 852.286 124.141C855.238 124.751 858.189 125.056 861.14 125.056C864.092 125.056 866.992 124.751 869.842 124.141C872.793 123.53 875.592 122.614 878.238 121.393C880.986 120.172 883.428 118.544 885.566 116.509C887.804 114.373 889.026 111.727 889.229 108.573V58.2074C889.229 55.3584 890.247 53.0182 892.282 51.1867C894.42 49.2535 896.913 48.2869 899.763 48.2869C905.869 48.7956 909.227 52.1024 909.838 58.2074V113.304C909.533 118.799 907.548 123.53 903.884 127.498C900.322 131.467 896.201 134.672 891.519 137.114C886.838 139.454 881.902 141.234 876.711 142.455C871.623 143.676 866.432 144.287 861.14 144.287Z" fill="#345995"/>
                <path d="M537.751 50.7288C544.875 51.1358 550.727 53.8831 555.307 58.9705C559.886 63.9562 563.194 69.6541 565.229 76.0643C567.265 82.4745 568.282 89.0373 568.282 95.7527C568.282 102.468 567.265 109.031 565.229 115.441C563.296 121.851 559.988 127.6 555.307 132.688C550.727 137.673 544.875 140.37 537.751 140.777H481.573C478.825 140.675 476.484 139.708 474.551 137.877C472.719 135.943 471.752 133.603 471.65 130.856V93.0055C471.752 90.1565 472.821 87.8163 474.856 85.9848C476.892 84.0516 479.334 83.085 482.184 83.085C484.931 83.1867 487.272 84.2042 489.206 86.1374C491.14 87.9689 492.157 90.2583 492.259 93.0055V116.204C492.259 118.951 493.684 120.325 496.533 120.325H532.561C536.428 120.122 539.634 118.646 542.178 115.899C544.722 113.152 546.554 110.048 547.674 106.589C548.895 103.028 549.506 99.4156 549.506 95.7527C549.506 92.0897 548.895 88.5285 547.674 85.0691C546.554 81.5079 544.722 78.3536 542.178 75.6064C539.634 72.8592 536.428 71.3839 532.561 71.1804H481.573C475.467 70.6716 472.159 67.3648 471.65 61.2598C471.65 58.4109 472.566 55.9689 474.398 53.9339C476.332 51.8989 478.723 50.8306 481.573 50.7288H537.751Z" fill="#348A95"/>
                <path d="M659.083 50.7288C664.273 50.8306 668.904 52.4586 672.975 55.6128C677.046 58.767 680.302 62.5317 682.745 66.9069C685.289 71.2821 687.172 75.9117 688.393 80.7956C689.614 85.6796 690.225 90.6653 690.225 95.7527C690.225 102.468 689.157 109.082 687.019 115.594C684.984 122.004 681.575 127.702 676.791 132.688C672.11 137.673 666.207 140.37 659.083 140.777H605.806C598.682 140.471 592.728 137.826 587.945 132.84C583.161 127.854 579.752 122.106 577.717 115.594C575.783 109.082 574.816 102.468 574.816 95.7527C574.816 89.0373 575.834 82.4745 577.869 76.0643C579.905 69.5524 583.263 63.8036 587.945 58.8179C592.728 53.7304 598.682 51.0341 605.806 50.7288H659.083ZM653.893 120.325C657.76 120.122 660.966 118.697 663.51 116.052C666.156 113.304 668.039 110.15 669.158 106.589C670.278 103.028 670.838 99.4156 670.838 95.7527C670.838 92.0897 670.227 88.5285 669.006 85.0691C667.886 81.5079 666.054 78.3536 663.51 75.6064C660.966 72.8592 657.76 71.3839 653.893 71.1804H610.538C606.671 71.3839 603.465 72.8592 600.921 75.6064C598.376 78.3536 596.493 81.5079 595.272 85.0691C594.153 88.5285 593.593 92.0897 593.593 95.7527C593.593 99.4156 594.153 103.028 595.272 106.589C596.392 110.15 598.224 113.304 600.768 116.052C603.414 118.697 606.671 120.122 610.538 120.325H653.893Z" fill="#348A95"/>
            </svg>
        )
    }

    else {
        return (
            <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3L10.5236 2.44011C11.5061 1.90267 12.5323 1.44917 13.5911 1.08443C15.6755 0.366473 17.8646 0 20.0692 0H171.357C172.911 0 174.462 0.111074 176 0.332373L178.521 1.06815C179.505 1.35547 180.461 1.73067 181.378 2.18923L181.534 2.26702C182.509 2.75431 183.429 3.3432 184.28 4.02387C185.091 4.67297 185.835 5.40216 186.5 6.20039L188 8L189.665 10.6642C190.22 11.5516 190.667 12.5016 190.998 13.4944C191.332 14.4946 191.544 15.5309 191.632 16.5816L191.717 17.605C191.905 19.8547 191.742 22.1198 191.234 24.3195L190.975 25.4431C190.66 26.807 190.147 28.1175 189.453 29.3328C188.82 30.4393 188.043 31.4566 187.142 32.3578L185.5 34L110.5 92L108.778 93.2916C107.265 94.4261 105.617 95.3679 103.872 96.0951L103.278 96.3425C101.438 97.1093 99.4691 97.5793 97.4813 97.7322C95.1941 97.9081 92.8733 97.6601 90.6771 96.9976C88.9024 96.4623 87.2179 95.6641 85.6797 94.6296L84 93.5L8 35L6.03864 33.0386C5.34709 32.3471 4.70549 31.6073 4.11868 30.8249L3.63921 30.1856C2.55426 28.739 1.72253 27.1189 1.1794 25.3941C0.887326 24.4666 0.680461 23.5144 0.561374 22.5494L0.366195 20.9676C0.123852 19.0037 0.219384 17.0128 0.648654 15.0811C0.882376 14.0293 1.21359 13.0016 1.638 12.0113L2.5 10L2.99187 9.18022C3.66143 8.06429 4.46532 7.03468 5.38554 6.11446C6.1267 5.3733 6.93926 4.70716 7.81138 4.12575L9.5 3Z" fill="#348A95"/>
                <path d="M0.271655 16.8268L0 19V169.464C0 171.819 0.167086 174.17 0.5 176.5L1.11289 178.645C1.37041 179.546 1.71096 180.422 2.13016 181.26C2.70769 182.415 3.43042 183.492 4.2808 184.464L5.53839 185.901C6.1782 186.632 6.88159 187.305 7.6403 187.912C8.54424 188.635 9.52204 189.261 10.5574 189.779L10.8644 189.932C11.6205 190.31 12.4025 190.634 13.2045 190.901C14.3982 191.299 15.6305 191.57 16.8811 191.709L19.5 192H169.959C171.983 192 174.003 191.833 176 191.5L178.064 190.881C180.009 190.297 181.848 189.407 183.511 188.242L183.603 188.178C185.191 187.066 186.593 185.71 187.756 184.159C188.583 183.057 189.283 181.864 189.842 180.605L190.01 180.227C190.668 178.747 191.16 177.198 191.478 175.61L191.5 175.5L191.802 172.778C191.934 171.598 191.901 170.406 191.706 169.235C191.569 168.414 191.353 167.607 191.06 166.828L190 164C188.675 161.351 186.932 158.932 184.838 156.838L184 156L34.7678 6.76777C33.5907 5.59074 32.3317 4.49874 31 3.5L28.5 2C26.1793 1.00543 23.7248 0.358308 21.2154 0.0794895L20.5 0H19.5613C18.5222 0 17.4849 0.0858486 16.46 0.25667L16.379 0.270172C15.4611 0.423155 14.5566 0.647813 13.6737 0.942083C12.5606 1.31312 11.4869 1.7932 10.4682 2.37533L8.5 3.5L8.19706 3.72721C7.06711 4.57467 5.99874 5.50126 5 6.5L4.25404 7.43245C3.42035 8.47457 2.69224 9.61552 2.0954 10.8092C1.70196 11.5961 1.36037 12.4189 1.08217 13.2535C0.695003 14.415 0.423513 15.6119 0.271655 16.8268Z" fill="#345995"/>
            </svg>
          )
    }
}