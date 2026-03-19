import { memo } from "react";

const Logo = memo(function Logo() {
  return (
    <div className="flex-shrink-0">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Nexton</h1>
    </div>
  );
});

export default Logo;
