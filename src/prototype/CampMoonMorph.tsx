import { motion } from "framer-motion"

const FullMoonMorphToCrescent = () => {
  return (
    <svg
      // width="431"
      // height="622"
      viewBox="0 0 431 622"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddddd_944_2922)">
        <motion.path
          d="M245.592 173.939C245.592 190.472 232.19 203.875 215.656 203.875C199.123 203.875 185.72 190.472 185.72 173.939C185.72 157.405 199.123 144.003 215.656 144.003C232.19 144.003 245.592 157.405 245.592 173.939Z"
          animate={{
            d: "M201.907 202.725C210.658 205.07 219.74 203.145 226.821 197.9C227.868 197.124 227.4 195.455 226.126 195.366C211.644 194.356 201.892 180.189 205.695 165.997C207.885 157.822 214.184 151.452 222.232 149.27C223.473 148.934 223.649 147.2 222.49 146.643C220.867 145.862 219.175 145.235 217.436 144.769C201.776 140.573 185.592 150.129 181.301 166.145C177.015 182.14 186.227 198.523 201.907 202.725Z",
          }}
          transition={{
            ease: "easeInOut",
            duration: 1000,
            delay: 1,
          }}
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddddd_944_2922"
          x="-231.537"
          y="-273.254"
          width="894.386"
          height="894.386"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.96734" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_944_2922"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.93468" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_944_2922"
            result="effect2_dropShadow_944_2922"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="34.7714" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_944_2922"
            result="effect3_dropShadow_944_2922"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="69.5428" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_944_2922"
            result="effect4_dropShadow_944_2922"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="119.216" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow_944_2922"
            result="effect5_dropShadow_944_2922"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="208.628" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect5_dropShadow_944_2922"
            result="effect6_dropShadow_944_2922"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect6_dropShadow_944_2922"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export const CampMoonMorph = () => {
  return (
    <div className="flex">
      <FullMoonMorphToCrescent></FullMoonMorphToCrescent>
    </div>
  )
}
