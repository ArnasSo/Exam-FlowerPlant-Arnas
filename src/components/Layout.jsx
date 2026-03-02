import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css";
// summary: i use layout as structure "wrapper", this way header and footer is always visible
// I am using outlet to render child pages there
// i am using css here to make sure my footer is always on the bottom!
export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}