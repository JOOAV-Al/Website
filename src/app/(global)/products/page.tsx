import Join from '@/components/home/Join';
import ProductsHero from '@/components/products/ProductsHero';
import WhatSetsUsApart from '@/components/products/WhatSetsUsApart';

const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductsHero />
      <WhatSetsUsApart />
      <Join />
    </div>
  );
}

export default ProductsPage