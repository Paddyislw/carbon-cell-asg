export function formatNumber(num: number) {
    if (Math.abs(num) >= 1000000) {
      return (
        new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
          num / 1000000
        ) + "M"
      );
    } else if (Math.abs(num) >= 1000) {
      return (
        new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
          num / 1000
        ) + "K"
      );
    } else {
      return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
        num
      );
    }
  }