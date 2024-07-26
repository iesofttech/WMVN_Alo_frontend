import Deposit from "../Components/Deposit/Deposit";
import Transactions from "../Components/Transactions/Transactions";
import Withdraw from "../Components/Withdraw/Withdraw";
import EwalletManagement from '../Components/EwalletManagement/EwalletManagement';
import Account from "../Components/Account/Account";
import AddPaymentMethod from "../Components/AddPaymentMethod/AddPaymentMethod";
import SingleTransaction from "../Components/Transactions/SingleTransaction";
import Notifications from "../Components/Notifications/Notifications";
import BettingRecord from "../Components/BettingRecord/BettingRecord";
import InviteFriend from "../Components/InviteFriend/InviteFriend";

export const privateRoutes = [
  {
    id: 1,
    path: '/deposit',
    component: Deposit,
  },
  {
    id: 2,
    path: '/withdraw',
    component: Withdraw,
  },
  {
    id: 3,
    path: '/account/transactions',
      component: Transactions,
  },
  {
    id: 4,
    path: '/account/ewallet',
      component: EwalletManagement,
  },
  {
    id: 5,
    path: '/notifications',
      component: Notifications,
  },
  {
    id: 6,
    path: '/account',
    component: Account,
  },
  {
    id: 7,
    path: '/add-payment-method',
    component: AddPaymentMethod,
  },
  {
    id: 8,
    path: '/transections/:id',
    component: SingleTransaction,
  },
  {
    id: 9,
    path: '/account/betting-records',
    component: BettingRecord,
  },
  {
    id: 10,
    path: '/account/invite-friend',
    component: InviteFriend,
  }
  // ... add more private routes here
];