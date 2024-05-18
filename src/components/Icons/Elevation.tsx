export default function ({ color }: { color?: string }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5384 17.096H2.63467C2.26283 17.096 1.99425 16.9345 1.82892 16.6115C1.66342 16.2884 1.68775 15.9762 1.90192 15.675L6.05367 9.84427C6.21783 9.60327 6.43033 9.41835 6.69117 9.28952C6.95217 9.16069 7.23008 9.09627 7.52492 9.09627H11.4827C11.5275 9.09627 11.5692 9.0866 11.6077 9.06727C11.6462 9.0481 11.6814 9.02252 11.7134 8.99052L16.7594 3.10002C17.0337 2.78219 17.3668 2.69602 17.7584 2.84152C18.1501 2.98702 18.3459 3.2706 18.3459 3.69227V15.2885C18.3459 15.7872 18.1693 16.2131 17.8162 16.5663C17.463 16.9194 17.0371 17.096 16.5384 17.096ZM5.39417 6.90377L2.20767 11.3845C2.08583 11.5602 1.92525 11.6624 1.72592 11.6913C1.52658 11.7201 1.33908 11.6737 1.16342 11.552C0.987749 11.4302 0.885499 11.2696 0.856665 11.0703C0.827832 10.8709 0.874332 10.6834 0.996166 10.5078L4.10192 6.16727C4.26592 5.92627 4.47842 5.73877 4.73942 5.60477C5.00025 5.47094 5.27808 5.40402 5.57292 5.40402H9.68467L13.8019 0.592269C13.9404 0.426935 14.1093 0.339185 14.3087 0.329018C14.508 0.318685 14.6903 0.382768 14.8557 0.521268C15.021 0.659601 15.1104 0.826852 15.1239 1.02302C15.1374 1.21918 15.0749 1.40002 14.9364 1.56552L10.8962 6.27127C10.732 6.47894 10.531 6.63627 10.2932 6.74327C10.0553 6.85027 9.80442 6.90377 9.54042 6.90377H5.39417ZM3.79617 15.596H16.5384C16.6281 15.596 16.7017 15.5672 16.7594 15.5095C16.8172 15.4519 16.8462 15.3782 16.8462 15.2885V5.29602L12.8384 9.96352C12.6742 10.1712 12.4732 10.3285 12.2354 10.4355C11.9976 10.5425 11.7467 10.596 11.4827 10.596H7.50942C7.45825 10.596 7.41183 10.6073 7.37017 10.6298C7.3285 10.6523 7.29158 10.6828 7.25942 10.7213L3.79617 15.596Z"
        fill={color || 'currentColor'}
      />
    </svg>
  )
}