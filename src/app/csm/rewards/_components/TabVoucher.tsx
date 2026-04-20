import WalletSummary from './voucher/WalletSummary';
import SearchBar from './voucher/SearchBar';
import FeaturedVoucher from './voucher/FeaturedVoucher';
import VoucherGrid from './voucher/VoucherGrid';
import SectionHeader from './shared/SectionHeader';

export default function TabVoucher() {
  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-right-5 duration-300">
      <WalletSummary used={12} remaining={15} />
      <SearchBar />
      <section>
        <SectionHeader title="Gần bạn" />
        <FeaturedVoucher />
      </section>
      <section>
        <SectionHeader title="Tất cả voucher" />
        <VoucherGrid />
      </section>
    </div>
  );
}