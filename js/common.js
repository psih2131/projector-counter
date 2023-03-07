var app = new Vue({
    el: '#projector-counter',
    data: {
        maxDistance: 453,
        minDistance: 0,
        distance: 453,

        maxDiagonal: 913,
        minDiagonal: 0,
        diagonal: 913,

        displayWidth: 730,
        displayHeight: 548,
        zIndex: 82,
        zIndexMax: 82,

        aspectRatio: 'value4',
        isActive: false,
        directionDown: false,
        downVar: 'top',

    },
    methods: {
        downMode() {
            let projectorImage = document.querySelector('.projector-element__icon')
            if (this.downVar == 'top') {
                this.directionDown = false;
                projectorImage.innerHTML = `
                <svg width="149" height="71" viewBox="0 0 149 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_31_31)">
                <path d="M147.226 36.21H138.712V58.0425H147.226V36.21Z" fill="white"/>
                <path d="M147.226 28.045V66.03" stroke="#979797" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M143.679 36.2099H115.298V58.0424H143.679V36.2099Z" fill="url(#paint0_linear_31_31)"/>
                <path d="M69.7107 0.354919H51.0857V28.7549H69.7107V0.354919Z" fill="url(#paint1_linear_31_31)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.77381 23.075H120.087C121.151 23.075 121.861 23.785 121.861 24.85V69.225C121.861 70.29 121.151 71 120.087 71H1.77381C0.709524 71 0 70.29 0 69.225V24.85C0 23.785 0.709524 23.075 1.77381 23.075Z" fill="#5D5D5D"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_31_31" x1="129.577" y1="40.5979" x2="129.562" y2="46.0025" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint1_linear_31_31" x1="64.3345" y1="14.6721" x2="60.9726" y2="14.6623" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <clipPath id="clip0_31_31">
                <rect width="149" height="71" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                `
            }
            if (this.downVar == 'down') {
                this.directionDown = true;
                projectorImage.innerHTML = `
                <svg width="168" height="60" viewBox="0 0 168 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M166 15.8H156.4V40.4H166V15.8Z" fill="white"/>
                <path d="M166 6.59998V49.6" stroke="#979797" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M162 15.9223H130V40.5223H162V15.9223Z" fill="url(#paint0_linear_31_41)"/>
                <path d="M122 44.9223H112V58.9223H122V44.9223Z" fill="url(#paint1_linear_31_41)"/>
                <path d="M125 54.9223H107V58.9223H125V54.9223Z" fill="url(#paint2_linear_31_41)"/>
                <path d="M24 44.9223H14V58.9223H24V44.9223Z" fill="url(#paint3_linear_31_41)"/>
                <path d="M31 54.9223H13V58.9223H31V54.9223Z" fill="url(#paint4_linear_31_41)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.12231H135.4C136.6 1.12231 137.4 1.92231 137.4 3.12231V53.1223C137.4 54.3223 136.6 55.1223 135.4 55.1223H2C0.8 55.1223 0 54.3223 0 53.1223V3.12231C0 1.92231 0.8 1.12231 2 1.12231Z" fill="#5D5D5D"/>
                <defs>
                <linearGradient id="paint0_linear_31_41" x1="146.099" y1="20.8672" x2="146.083" y2="26.9569" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint1_linear_31_41" x1="119.557" y1="52.0147" x2="117.418" y2="52.0083" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint2_linear_31_41" x1="124.999" y1="57.0003" x2="117.454" y2="56.9922" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint3_linear_31_41" x1="21.5568" y1="52.0147" x2="19.4178" y2="52.0083" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint4_linear_31_41" x1="30.9994" y1="57.0003" x2="23.4538" y2="56.9922" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2C2C2C"/>
                <stop offset="0.295" stop-color="#3C3F3D"/>
                <stop offset="1"/>
                </linearGradient>
                </defs>
                </svg>

                `
            }
            else {

            }
        },
        typeChange() {
            let projectorElement = document.querySelector('.projector-element')
            let inputDistance = document.querySelector('.screen')
            console.log(this.aspectRatio)
            if (this.aspectRatio == 'value4') {
                this.zIndexMax = 82;
                this.zIndex = 82;
                this.maxDiagonal = 913;
                this.diagonal = 913;
                this.isActive = false;
                this.distance = 453;

            }
            if (this.aspectRatio == 'value16') {
                this.zIndexMax = 62;
                this.zIndex = 62;
                this.maxDiagonal = 838;
                this.diagonal = 838;
                this.isActive = true;
                this.distance = 453;

            }

            projectorElement.style.left = 0 + '%';
            inputDistance.style.width = `calc(50% + 50%)`;
            this.lightLine();
        },
        changeDistanceProjector(status) {
            let projectorElement = document.querySelector('.projector-element')
            let inputDistance = document.querySelector('.screen')

            if (this.aspectRatio == 'value4') {
                this.zIndexMax = 82;
                this.maxDiagonal = 913;


                let currentOneProcent = this.maxDistance / 100;
                let currentRangeProcent = this.distance / currentOneProcent;
                let reversProcent = 100 - currentRangeProcent;

                let opeProcentDiagonal = this.maxDiagonal / 100;
                let currentProcentDiagonal = this.diagonal / opeProcentDiagonal;

                let zIndexOneProcent = this.zIndexMax / 100;

                if (status == true) {
                    this.diagonal = currentRangeProcent * opeProcentDiagonal;
                }
                else {
                    this.distance = currentProcentDiagonal * currentOneProcent;
                }



                projectorElement.style.left = reversProcent + '%';
                inputDistance.style.width = `calc(50% + ${currentRangeProcent / 2}%)`;
                this.displayWidth = this.diagonal * 4 / 5;
                this.displayHeight = this.diagonal * 3 / 5;
                this.zIndex = zIndexOneProcent * currentRangeProcent;

            }

            if (this.aspectRatio == 'value16') {
                this.zIndexMax = 62;
                this.maxDiagonal = 838;


                let currentOneProcent = this.maxDistance / 100;
                let currentRangeProcent = this.distance / currentOneProcent;
                let reversProcent = 100 - currentRangeProcent;

                let opeProcentDiagonal = this.maxDiagonal / 100;
                let currentProcentDiagonal = this.diagonal / opeProcentDiagonal;

                let zIndexOneProcent = this.zIndexMax / 100;

                if (status == true) {
                    this.diagonal = currentRangeProcent * opeProcentDiagonal;
                }
                else {
                    this.distance = currentProcentDiagonal * currentOneProcent;
                }



                projectorElement.style.left = reversProcent + '%';
                inputDistance.style.width = `calc(50% + ${currentRangeProcent / 2}%)`;

                this.displayWidth = 1;
                this.displayHeight = 1;

                this.displayWidth = this.diagonal * 16 / (Math.sqrt(337));
                this.displayHeight = this.diagonal * 9 / (Math.sqrt(337));
                this.zIndex = zIndexOneProcent * currentRangeProcent;

            }

            this.lightLine()
        },

        lightLine() {
            let el1 = document.querySelector('#x1')
            let el2 = document.querySelector('#x2')
            let lightLine = document.querySelector('.projector-element__linear-distance')
            const distance = this.getDistance(el1, el2);
            console.log(distance)
            lightLine.style.width = distance + 'px'
        },

        getDistance(el1, el2) {
            const rect1 = el1.getBoundingClientRect();
            const rect2 = el2.getBoundingClientRect();
            const x1 = rect1.left + rect1.width - 1;
            const y1 = rect1.top + rect1.height / 2;
            const x2 = rect2.left;
            const y2 = rect2.top;
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }

    },
    mounted() {
        this.lightLine();
        this.downMode();
    },

})
