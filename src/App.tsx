/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import MainFeed from './components/MainFeed';
import SidebarRight from './components/SidebarRight';
import NoticesAndShortcuts from './components/NoticesAndShortcuts';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen antialiased flex flex-col justify-between pb-16 lg:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto w-full px-4 py-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start bg-white border-0">
        <section className="w-full lg:col-span-9 space-y-6 flex flex-col order-1 lg:order-none">
          <MainFeed />
        </section>
        <aside className="w-full lg:col-span-3 space-y-6 order-2 lg:order-none">
          <SidebarRight />
        </aside>
      </main>
      <div className="order-3 lg:order-none">
        <NoticesAndShortcuts />
      </div>
      <div className="order-4 lg:order-none bg-white">
        <Footer />
      </div>
      <BottomNav />
    </div>
  );
}
