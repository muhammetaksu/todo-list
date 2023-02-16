import React from "react";

type Props = {
  color?: string;
};

const Pin = (props: Props) => {
  const { color } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.88604 1.55341C8.77954 0.659914 10.2965 0.978888 10.7545 2.15657L11.3882 3.78609C11.7137 4.62316 12.2335 5.37086 12.9048 5.96755C13.5404 6.53255 14.2951 6.94723 15.1128 7.18087L19.0719 8.31205C20.3549 8.67862 20.7721 10.2886 19.8286 11.2322L16.0607 15.0001L21.6553 20.5947C21.9482 20.8876 21.9482 21.3625 21.6553 21.6554C21.3624 21.9483 20.8876 21.9483 20.5947 21.6554L15 16.0607L11.2321 19.8287C10.2886 20.7722 8.67856 20.355 8.31199 19.072L7.18081 15.1129C6.94717 14.2951 6.53249 13.5405 5.96749 12.9049C5.3708 12.2336 4.6231 11.7138 3.78603 11.3882L2.15651 10.7545C0.978827 10.2966 0.659853 8.7796 1.55335 7.8861L7.88604 1.55341ZM14.4748 14.4647C14.4731 14.4663 14.4714 14.468 14.4697 14.4697C14.468 14.4714 14.4663 14.4731 14.4646 14.4748L10.1714 18.768C10.0366 18.9028 9.80664 18.8432 9.75428 18.6599L8.62309 14.7008C8.32762 13.6666 7.80316 12.7122 7.0886 11.9083C6.33397 11.0594 5.38834 10.4019 4.3297 9.99024L2.70017 9.35654C2.53194 9.29111 2.48637 9.0744 2.61401 8.94676L8.9467 2.61407C9.07434 2.48643 9.29105 2.532 9.35648 2.70024L9.99018 4.32976C10.4019 5.3884 11.0593 6.33403 11.9083 7.08866C12.7122 7.80322 13.6665 8.32768 14.7007 8.62315L18.6599 9.75434C18.8431 9.8067 18.9027 10.0367 18.768 10.1715L14.4748 14.4647Z"
        fill={color === "black" ? "#010A1B" : "#FF7964"}
      />
    </svg>
  );
};

export default Pin;