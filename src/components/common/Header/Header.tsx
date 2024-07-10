import MobileMenu from "@/src/components/common/Header/components/MobileMenu/MobileMenu";
import Logo from "@/src/components/common/Logo/Logo";
import SoonLabel from "@/src/components/common/SoonLabel/SoonLabel";

import styles from './Header.module.css';
import Link from "next/link";
import {clsx} from "clsx";
import {usePathname} from "next/navigation";
import {FuelIcon} from "@/src/components/icons";
import IconButton from "@/src/components/common/IconButton/IconButton";
import {useState} from "react";
import CloseIcon from "@/src/components/icons/Close/CloseIcon";
import ConnectButton from "@/src/components/common/ConnectButton/ConnectButton";
import LaunchAppButton from "@/src/components/common/LaunchAppButton/LaunchAppButton";

type Props = {
  isHomePage?: boolean;
}

const Header = ({ isHomePage }: Props) => {
  const [promoHidden, setPromoHidden] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {!promoHidden && (
        <section className={styles.promo}>
          Trade, Earn and get Rewards using the Fuel most efficient AMM
          <IconButton onClick={() => setPromoHidden(true)} className={styles.promoClose}>
            <CloseIcon />
          </IconButton>
        </section>
      )}
      <section className={styles.main}>
        <div className={styles.left}>
          <Logo/>
          <div className={clsx('desktopOnly', styles.links)}>
            <Link href="/swap" className={clsx(styles.link, pathname.includes('/swap') && styles.activeLink)}>
              Swap
            </Link>
            <a href="#" className={styles.link}>
              Liquidity
              <SoonLabel className={styles.hiddenLabel} />
            </a>
            <a href="#" className={styles.pointsText} data-content="Points">
              Points
              <SoonLabel className={styles.hiddenLabel} />
            </a>
          </div>
        </div>
        <div className={clsx('mobileOnly', styles.links)}>
          <a className={styles.points}>
            <span className={styles.pointsText}>
              Points
            </span>
            <SoonLabel/>
          </a>
          <MobileMenu/>
        </div>
        <div className={clsx('desktopOnly', styles.links)}>
          <a href="#" className={styles.link}>
            Docs
          </a>
          {!isHomePage && (
            <a href="#" className={styles.testnetLabel}>
              <FuelIcon />
              Testnet
            </a>
          )}
          {!isHomePage && (
            <ConnectButton className={styles.launchAppButton} />
          )}
          {isHomePage && (
            <LaunchAppButton className={styles.launchAppButton} />
          )}
        </div>
      </section>
    </header>
  );
}

export default Header;
