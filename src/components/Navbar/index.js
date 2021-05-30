import _                        from 'lodash';
import classNames               from 'classnames';
import darkModeLogo             from '../../data/images/logo-darkmode.svg';
import React                    from 'react';
import style                    from './styles.module.scss';
import { getProfilePictureUrl } from '../../helper/ProfilePicture';

const Navbar = ({ user }) => {
    const getProfileStyle = () => {
        const profilePicture = getProfilePictureUrl(_.get(user, 'profilePicture'));

        return {
            backgroundImage: 'url("' + profilePicture + '")',
        };
    };

    const getBalance = () => {
        const userBalance = user.balance;

        if (!_.isNull(userBalance)) {
            return userBalance;
        }

        return '-';
    };

    return (
        <div className={style.navbar}>
            <div
                className={classNames(
                    style.navbarItems,
                    style.hideOnMobile,
                )}
            >
                <img
                    src={darkModeLogo}
                    alt="Wallfair"
                />
                <a
                    href="/"
                    className={style.active}
                >
                    Home
                </a>
                <a>Discover</a>
                <a>My Bets</a>
                <a>My Wallet</a>
            </div>
            <div className={style.navbarItems}>
                <button
                    className={style.balanceOverview}
                >
                    <span className={style.actualBalanceText}>
                        Your actual Balance
                    </span>
                    {getBalance()} EVNT
                </button>
                <div
                    className={style.profile}
                    style={getProfileStyle()}
                >
                </div>
            </div>
        </div>
    );
};

export default Navbar;