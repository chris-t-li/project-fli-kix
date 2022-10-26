function EyeStay({ colorObj, selectedPart }) {
    const highlight = selectedPart === "EyeStay" ? { stroke: "#ffffff", strokeWidth: "2px", strokeLinejoin: "round" } : null;


    return (
        <svg
            // id="Layer_EyeStay" 
            className="product-svg"
            viewBox="0 0 750 750"
            style={highlight}
        >
            {/* <defs><style>.cls-1{fill:#020202;opacity:.25;}</style></defs> */}

            <polygon
                // id="_eyestay_"
                fill={colorObj.EyeStay}
                opacity={0.35}
                points="278.47629 281.24679 283.35372 282.36604 289.32081 286.24077 292.42059 288.02315 295.28789 289.34056 298.35513 291.16311 301.3779 292.56337 304.41092 294.39714 310.30004 297.36871 315.27067 299.63791 319.4849 301.74503 324.21656 303.8465 326.26229 304.28992 327.92195 304.28992 329.87755 304.89631 331.27228 305.40771 333.87616 306.26993 336.09996 307.13474 339.80629 308.24663 347.34248 311.58233 356.48475 316.02992 359.57335 318.00662 362.29133 319.85979 364.76221 321.8057 367.10955 323.31902 371.86225 326.96669 373.76348 328.71782 376.21882 330.59647 379.53756 333.29295 382.94311 335.82634 387.3454 338.31821 390.98461 339.90446 392.70368 340.34452 394.2405 340.87537 395.9119 341.54392 397.24902 342.32391 398.69756 343.04818 399.97896 343.43817 402.93176 344.44101 404.09849 344.6706 406.21423 345.18026 409.62191 346.22647 412.51075 347.4928 417.38098 350.28506 420.56286 352.55783 421.92652 353.33707 423.34875 354.64851 424.20551 355.22889 425.36628 356.30675 426.0354 356.79462 426.55504 357.27095 426.94477 357.48747 427.43981 358.28315 428.11895 358.84245 429.63705 359.6814 430.5559 360.4005 431.31495 360.8799 434.27124 363.15704 436.10894 364.19574 437.50718 364.71509 438.58583 365.31434 439.7073 365.82587 440.1765 366.1868 440.59157 366.656 441.76459 367.61246 442.34465 367.85776 444.54723 367.85776 446.49068 368.31124 448.69326 368.76471 453.87579 369.67165 460.35396 371.27549 470.93644 374.57389 482.18384 379.2088 485.20081 380.30901 486.53944 381.27738 487.32711 381.27738 487.41199 382.27902 488.37405 383.24107 492.36375 383.29766 492.36375 384.28802 494.38218 384.28454 495.32306 385.28684 497.41878 385.3324 498.2844 386.19803 499.37782 386.24358 500.38012 387.29144 502.33916 387.29144 502.43028 388.20263 504.43488 388.20263 505.40277 389.32483 507.36217 389.28485 507.39756 390.26686 509.39041 390.20458 510.13772 391.26328 512.19284 391.32556 512.37967 392.2597 514.18568 392.2597 514.31023 393.19385 516.2408 393.3184 516.42763 394.25254 519.29234 394.37709 519.47917 395.24896 521.40973 395.31124 522.34388 396.18311 525.39541 396.43221 526.32956 397.30408 538.59799 397.17953 539.28303 396.30766 541.4327 396.1936 541.4056 395.24486 543.43862 395.24486 544.38736 394.21479 545.39032 394.21479 545.36321 393.26605 546.42038 393.23894 546.39327 392.26309 547.39623 392.23599 547.39623 391.28724 548.39919 390.28429 548.39919 389.27907 549.44412 389.27907 549.43468 386.29955 550.32436 385.29866 549.37134 385.26504 549.35223 384.30939 548.33924 384.27116 548.33924 383.31551 547.38359 383.2964 547.36447 382.2834 544.38284 382.2834 544.36372 381.27738 542.4333 381.27738 542.41419 380.29565 539.39433 380.29565 539.37522 379.24443 536.33624 379.28265 536.33624 378.25055 533.28732 378.27526 533.28732 377.24694 530.43086 377.28502 530.39278 376.21861 527.34589 376.2567 527.30781 375.30455 525.32733 375.34263 525.25116 374.27623 524.35856 374.27623 524.35856 375.27271 523.30998 377.82331 520.88918 381.33833 520.20515 382.43278 519.2019 383.39042 515.55373 384.16566 514.50488 384.16566 514.27687 383.1472 510.39627 383.1472 510.39627 382.37734 508.458 382.37734 508.458 381.72593 507.31686 381.25218 506.4742 380.16271 506.4742 379.05525 505.36674 379.05525 505.37304 377.20378 505.50943 375.15793 505.85041 373.24847 506.41342 371.27549 506.74802 369.18493 507.38901 367.20541 507.55347 365.64305 508.458 364.73852 508.458 361.28488 507.38901 361.94272 507.38901 364.25752 506.48449 364.25752 505.16882 363.34062 504.26429 362.43609 503.3723 361.93092 503.3723 360.4278 502.75337 358.571 501.11344 357.04941 499.77471 355.64764 497.87171 354.32719 496.27941 353.2786 493.83271 352.46304 491.69669 351.88049 489.83254 351.14259 488.13006 350.79161 489.05416 353.5639 489.48067 355.48318 489.48067 360.10367 488.67088 362.30728 487.33357 363.64459 484.88184 364.25752 481.84504 363.33812 479.68881 362.06594 477.65386 360.61241 476.08117 359.06828 474.71655 356.0309 473.66006 352.81744 470.24784 344.39918 468.90272 342.49545 467.10137 340.36658 464.44776 339.36953 459.47261 339.30266 459.47261 350.67963 459.11724 351.7965 458.33109 352.38166 456.37998 353.56763 455.42355 354.3519 454.37148 355.27007 451.31092 355.1553 450.47886 354.36663 450.47886 353.64548 449.18079 353.64548 449.18079 352.3474 448.24329 352.3474 448.24329 351.48202 447.30579 351.48202 447.30579 350.4724 446.22406 350.4724 446.22406 349.46279 445.50291 349.0301 444.70964 347.08298 444.0606 346.2176 443.41156 346.2176 442.76252 345.2801 442.34465 341.5301 442.04137 337.41953 441.2706 336.25723 441.2706 328.39799 439.11028 326.17766 435.50974 324.19737 436.3384 325.39755 436.3384 334.95955 435.43762 335.22978 433.39584 337.45171 432.37496 338.23239 431.46378 339.27339 428.40738 339.27339 428.40738 338.06137 426.29952 338.06137 426.29952 337.11283 425.45638 337.11283 425.45638 336.21699 423.35752 336.21699 423.35752 334.22498 422.46018 334.22498 422.46018 331.20848 421.35329 331.20848 421.35329 324.58341 420.99042 320.5193 420.70013 318.37838 420.0447 316.04378 419.36086 314.93253 418.64852 314.41965 417.36631 313.70731 415.85615 313.13744 414.38981 312.63731 413.23343 312.56022 410.99778 312.94568 410.99778 317.64827 410.82721 319.28571 409.97769 323.29737 409.43258 324.31609 409.22936 325.38063 408.92534 326.31804 408.06394 327.35679 407.53637 328.34487 407.53637 329.23256 407.40761 330.21115 406.37751 330.28841 406.37751 331.20848 403.39222 331.20848 403.39222 330.28283 402.29967 329.78496 400.30819 329.23177 398.39435 328.24991 397.36863 327.25436 396.76526 326.40965 396.42499 325.35376 396.42499 324.72023 394.33924 324.24064 394.33924 323.21099 393.424 323.21099 393.42612 318.15048 393.6572 316.27621 394.068 315.37759 394.63285 313.45197 395.37742 312.1939 396.24516 310.28059 396.42499 308.65296 396.42499 307.77573 396.23424 307.3422 395.84337 307.04753 394.95865 306.56042 394.02152 305.94925 393.41035 305.13435 392.55471 304.28992 391.48547 303.79492 390.52946 303.07791 390.1112 302.4804 389.21494 301.64389 388.19918 301.10613 387.42242 300.50863 386.28716 300.15012 386.04815 301.04638 386.04815 304.98993 384.26514 309.31098 383.42298 309.44395 383.42298 310.33043 382.5365 310.41908 382.5365 311.30557 379.4338 311.30557 379.4338 310.15314 374.2922 310.15314 374.2922 309.26665 373.27274 309.26665 373.27274 308.33584 372.43058 308.33584 372.10397 307.36706 371.43793 307.36706 371.14458 303.96419 371.13519 287.68856 370.59024 286.90142 369.682 286.23538 369.01596 285.56933 367.98663 284.84274 366.83619 283.93451 365.38301 282.84462 364.77752 281.99693 363.86928 281.57309 363.86928 287.44636 363.56653 288.89954 363.01513 290.47931 362.69384 291.6509 362.12293 292.86421 361.32174 294.26629 360.72085 295.46808 360.17003 296.71994 359.61921 297.72142 358.76795 298.82306 357.51609 299.5241 354.33597 300.23672 347.39469 300.23672 347.39469 299.2857 346.37374 299.2857 346.37374 298.30672 345.3528 298.30672 345.3528 296.2928 344.37381 296.2928 344.35411 293.4823 345.63653 290.12828 346.77098 288.50059 348.69461 287.41546 349.42661 284.18102 347.3805 284.23765 347.33226 283.28662 343.39815 283.25748 343.33987 282.29581 340.36743 282.26666 340.37426 281.24679 339.40128 281.24679 339.37653 279.31679 338.43916 279.31679 338.36973 278.30999 335.37165 278.28304 335.37765 277.28162 334.06176 277.28162 332.98919 278.39532 332.25759 280.26822 330.96997 280.29749 330.40878 282.31188 328.37422 282.3418 328.41207 284.2689 326.40438 284.2689 326.4262 285.2291 324.36087 285.25092 324.36087 286.28462 320.37946 286.28462 320.40842 285.2608 314.38126 285.2608 314.39166 284.28254 313.38219 284.28254 313.39259 283.24185 312.37271 283.24185 312.37271 282.2377 311.32039 282.2377 311.32039 277.72115 311.55816 275.9487 314.48419 272.9373 316.31115 271.22629 317.3308 270.23708 316.42851 269.31452 315.38621 269.31452 315.39522 268.24607 314.37618 268.24607 313.35671 267.25979 309.39185 267.25979 309.42099 266.28944 306.36066 266.28944 306.33151 265.26933 298.37042 265.26933 298.38292 266.25615 292.41744 266.25615 292.41744 267.29363 291.35827 267.29363 291.37372 268.25158 290.36941 268.26703 290.40031 269.27134 288.37892 269.26942 288.37892 270.26816 286.36391 270.26816 286.38171 273.2753 285.37688 273.2753 285.38022 274.27345 284.37749 274.27255 284.3808 275.27167 283.3811 275.27167 283.3743 276.27402 282.37527 276.2777 282.37513 277.27626 281.37532 277.27626 281.37532 278.2769 279.37037 278.28476 279.38461 279.281 278.39888 280.28082 278.47629 281.24679" />
        </svg>
    );
}

export default EyeStay;