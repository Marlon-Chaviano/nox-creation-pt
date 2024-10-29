import React from "react";

function LogoIcon({fill}: {fill?: string}) {
  return (
    <svg fill="none" height="33" viewBox="0 0 22 33" width="22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.80555 20.4817V28.6025C9.80555 28.9138 9.68188 29.2124 9.46173 29.4324C9.2417 29.6526 8.94315 29.7762 8.6318 29.7762C8.32056 29.7762 8.02201 29.6526 7.80187 29.4324C7.58172 29.2124 7.45806 28.9138 7.45806 28.6025V20.493C7.78491 20.7317 8.17668 20.8649 8.58126 20.8749C9.02223 20.8874 9.45432 20.7487 9.80555 20.4817ZM19.802 18.1343C19.5042 18.1343 19.2184 18.2526 19.0078 18.4632C18.7972 18.6738 18.6788 18.9596 18.6788 19.2575V20.6727C18.6788 20.984 18.8025 21.2826 19.0226 21.5026C19.2427 21.7228 19.5412 21.8464 19.8526 21.8464C20.1639 21.8464 20.4625 21.7228 20.6825 21.5026C20.9027 21.2826 21.0263 20.984 21.0263 20.6727V19.3136C21.0351 19.1526 21.009 18.9915 20.9499 18.8414C20.8909 18.6914 20.8002 18.5557 20.684 18.4438C20.5678 18.3319 20.4289 18.2464 20.2768 18.1929C20.1246 18.1395 19.9627 18.1195 19.802 18.1343ZM4.90839 23.5593C4.50423 23.5472 4.11297 23.4142 3.78519 23.1774V31.3206C3.78519 31.6335 3.90944 31.9335 4.13062 32.1546C4.35179 32.3758 4.65176 32.5 4.96455 32.5C5.27734 32.5 5.57731 32.3758 5.79848 32.1546C6.01966 31.9335 6.14391 31.6335 6.14391 31.3206V23.2336C5.77713 23.4707 5.34437 23.5848 4.90839 23.5593ZM16.1404 15.6969C15.9882 15.6893 15.8361 15.7127 15.6933 15.7658C15.5505 15.8188 15.42 15.9003 15.3096 16.0053C15.1993 16.1105 15.1115 16.2368 15.0516 16.3769C14.9917 16.517 14.9608 16.6678 14.961 16.8201V23.0763C14.961 23.3892 15.0853 23.6892 15.3064 23.9103C15.5277 24.1315 15.8276 24.2557 16.1404 24.2557C16.4532 24.2557 16.7532 24.1315 16.9744 23.9103C17.1955 23.6892 17.3198 23.3892 17.3198 23.0763V16.8987C17.3287 16.7367 17.3025 16.5746 17.2427 16.4236C17.183 16.2727 17.0913 16.1364 16.9738 16.0243C16.8563 15.9122 16.716 15.8269 16.5625 15.7743C16.409 15.7216 16.2458 15.7029 16.0842 15.7194L16.1404 15.6969ZM12.4114 18.1006C11.9883 18.0976 11.5765 17.9643 11.232 17.7187V25.8843C11.232 26.1972 11.3562 26.4972 11.5774 26.7183C11.7987 26.9395 12.0986 27.0637 12.4114 27.0637C12.7242 27.0637 13.0241 26.9395 13.2453 26.7183C13.4665 26.4972 13.5907 26.1972 13.5907 25.8843V17.7299C13.2345 17.9953 12.7994 18.1337 12.3552 18.123L12.4114 18.1006ZM2.35872 24.3568V1.54458C2.35577 1.26651 2.24322 1.00085 2.04554 0.805264C1.84786 0.609681 1.581 0.499989 1.30291 0.5H1.05581C0.777727 0.499989 0.510866 0.609681 0.313182 0.805264C0.115499 1.00085 0.00295402 1.26651 0 1.54458V24.3568C0 24.6368 0.111242 24.9054 0.30924 25.1034C0.507238 25.3014 0.775795 25.4126 1.05581 25.4126H1.30291C1.58294 25.4126 1.85148 25.3014 2.04948 25.1034C2.24749 24.9054 2.35872 24.6368 2.35872 24.3568ZM5.03194 22.6945H4.78484C4.50482 22.6945 4.23627 22.5833 4.03827 22.3852C3.84027 22.1872 3.72903 21.9187 3.72903 21.6386V4.26272C3.73199 3.98466 3.84453 3.71898 4.04221 3.52341C4.23989 3.32783 4.50675 3.21814 4.78484 3.21815H5.03194C5.31002 3.21814 5.57688 3.32783 5.77457 3.52341C5.97225 3.71898 6.0848 3.98466 6.08775 4.26272V21.6611C6.08775 21.9411 5.97651 22.2097 5.77851 22.4077C5.58051 22.6057 5.31195 22.7169 5.03194 22.7169V22.6945ZM8.74974 20.0212H8.4914C8.21442 20.0212 7.94867 19.9112 7.75278 19.7153C7.5569 19.5194 7.44682 19.2538 7.44682 18.9767V6.95841C7.44536 6.82029 7.47131 6.68325 7.52309 6.55521C7.57487 6.42718 7.65158 6.3107 7.74874 6.21251C7.8459 6.11432 7.96159 6.03637 8.08907 5.98318C8.21655 5.92998 8.35325 5.90259 8.4914 5.9026H8.74974C9.02784 5.90556 9.29348 6.0181 9.48903 6.21578C9.68469 6.41346 9.79431 6.68032 9.79431 6.95841V18.9767C9.79431 19.2538 9.68424 19.5194 9.48835 19.7153C9.29247 19.9112 9.02683 20.0212 8.74974 20.0212ZM12.4675 17.2694H12.2317C11.9536 17.2694 11.6867 17.1598 11.489 16.9641C11.2913 16.7686 11.1788 16.5029 11.1759 16.2248V9.75518C11.1666 9.61096 11.1871 9.4664 11.2361 9.33038C11.2849 9.19448 11.3613 9.06991 11.4602 8.96467C11.5592 8.85931 11.6787 8.77552 11.8115 8.71824C11.9441 8.66107 12.0871 8.63164 12.2317 8.63198H12.4788C12.7588 8.63198 13.0273 8.74317 13.2254 8.94119C13.4234 9.13921 13.5346 9.40777 13.5346 9.68779V16.2024C13.536 16.342 13.5099 16.4805 13.4574 16.6098C13.4051 16.7392 13.3276 16.857 13.2293 16.9562C13.1311 17.0554 13.0143 17.1342 12.8854 17.188C12.7565 17.2418 12.6184 17.2694 12.4788 17.2694H12.4675ZM16.1966 14.8545H15.9495C15.6694 14.8545 15.4009 14.7433 15.2029 14.5453C15.0048 14.3473 14.8936 14.0787 14.8936 13.7987V12.1251C14.8966 11.847 15.0091 11.5814 15.2068 11.3858C15.4045 11.1902 15.6714 11.0806 15.9495 11.0806H16.1966C16.4747 11.0806 16.7415 11.1902 16.9392 11.3858C17.1369 11.5814 17.2495 11.847 17.2524 12.1251V13.7987C17.2524 14.0768 17.1427 14.3437 16.9471 14.5414C16.7515 14.739 16.4859 14.8516 16.2078 14.8545H16.1966Z"
        fill={fill ? fill : "#FBBF24"}
      />
    </svg>
  );
}

export default LogoIcon;