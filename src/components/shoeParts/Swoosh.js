function Swoosh({ colorObj, selectedPart }) {
    const highlight = selectedPart === "Swoosh" ? { stroke: "#000000", strokeWidth: "2px", strokeLinejoin: "round" } : null;

    return (
        <svg
            // className="Layer_Swoosh"
            className="product-svg"
            viewBox="0 0 750 750"
            style={highlight}
        >
            {/* <defs><style>.cls-1{fill:#0081c6;opacity:.25;}</style></defs> */}
            <polygon
                //id="_Swoosh_"
                fill={colorObj.Swoosh}
                opacity={0.75}
                points="97.08415 347.57999 98.57473 348.40809 100.39655 349.56743 101.88713 350.56115 110.81918 354.43128 140.36133 364.59304 171.65704 373.57571 198.66371 381.25864 231.6007 389.83856 267.26702 398.06925 294.91369 403.76741 316.22907 406.51098 324.03767 407.56619 342.60948 408.41037 354.21686 408.41037 363.36822 407.98828 373.24763 406.11639 383.02304 401.85265 390.82257 393.94912 393.49409 388.1325 394.42862 385.06188 394.87196 381.59293 394.87196 378.61254 394.87196 375.7198 394.66454 373.34953 394.26723 371.27549 393.57192 369.37636 392.59434 367.13418 391.77693 365.32973 390.66205 363.34235 389.45023 361.40343 388.26237 359.33374 387.28793 357.96066 386.13631 356.18894 384.81503 354.23573 383.29849 352.41588 381.68085 350.54549 379.80344 348.44976 377.83738 346.47321 375.49062 344.36428 373.75763 342.9537 372.25381 341.8343 370.48877 340.49287 368.58253 339.15144 366.53509 337.6688 364.55824 336.18617 362.652 334.77414 360.88696 333.43271 358.62771 331.66767 356.74176 330.38339 354.38006 328.78924 351.78219 327.13605 349.30241 325.65999 347.41305 324.53818 345.46464 323.53446 344.04762 322.82595 342.8255 322.21009 343.99649 324.96033 344.35326 326.14925 344.6231 327.2286 344.89294 328.30794 345.36907 330.65181 345.61653 332.03755 346.06195 334.16566 346.39367 336.0565 346.75459 337.42798 347.04332 338.87164 347.22923 340.02538 347.37032 341.15408 347.46438 342.51793 347.46438 343.55257 347.45129 344.67662 347.41829 345.93093 347.38528 347.15223 347.26501 348.35495 347.02446 349.67793 346.48062 352.31383 345.36102 355.67262 344.24143 358.285 342.46006 361.65331 340.67316 364.07838 338.631 366.12054 336.33356 368.03507 333.01505 369.82196 329.44126 371.27549 326.12274 372.62994 322.54895 373.52339 318.84753 373.77866 315.52901 373.90629 312.5934 373.90629 309.53015 373.77866 305.44583 373.65102 301.48913 373.39575 283.00209 371.27549 263.22986 368.25141 245.97806 365.31023 228.0151 362.04553 210.27273 358.47491 192.16459 354.90429 167.68035 349.80341 146.48766 344.66821 128.38758 340.47429 124.41439 340.36393 122.42779 340.36393 120.33083 340.36393 116.24728 341.35722 113.04665 342.35052 109.95639 343.12308 106.86613 343.67492 103.88624 344.33711 101.56855 344.88895 99.58195 345.55114 97.08415 347.57999" />
        </svg>
    );
}

export default Swoosh;