import { getCategory, getProducts } from "./utils/fetch";

export default async function Home() {
  const [products, category] = await Promise.all([
    getCategory(),
    getProducts()
  ]);

  return (
    <div className='top-page'>
      <ul className="flex flex-wrap gap-3">
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <p className="font-medium text-lg relative">USER</p>
          <div className='flex justify-between w-full mt-4'>
            <svg className="w-12 h-12 text-[#01c0c8] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-5xl">30</span>
          </div>
        </li>
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <p className="font-medium text-lg relative">PRODUCTS</p>
          <div className='flex justify-between w-full mt-4'>
            <svg className="w-12 h-12 text-[#00c292] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.0524 2.01283c-.2634-.00221-.7706-.00646-1.3064.08808-.6053.10681-1.377.35866-1.975.99279-.557.59067-.8308 1.31504-.9706 1.92248-.1413.61388-.1628 1.1828-.1628 1.5327v1h1c.0429 0 .0873.00018.1333.00036.8172.00329 2.1026.00847 3.2375-.9589.7023-.59862.9572-1.43277 1.059-2.06861.0871-.54385.0798-1.08153.0758-1.37798-.0007-.051-.0013-.09486-.0013-.13038v-1h-1c-.0255 0-.0554-.00025-.0895-.00054Zm-3.0525 7.02912c-.2934 0-.3974-.0566-.7263-.23555-.1027-.05589-.2273-.12372-.3865-.20548-.6797-.34907-1.55211-.64467-3.12486-.59552-1.30968.04093-2.37715.88151-3.01521 2.0359-.64078 1.1594-.90215 2.7005-.65499 4.4145.1543 1.07.66239 2.84 1.39644 4.358.36735.7596.81762 1.5119 1.34963 2.0895C7.35502 21.4646 8.08053 22 8.99163 22c1.17857 0 1.86287-.2589 2.38977-.5504.1663-.092.2761-.1558.3523-.2001.1161-.0674.1542-.0895.1949-.0968.0198-.0035.0403-.0035.0708-.0035.0105 0 .0195-.0003.0268-.0005.0132-.0003.0222-.0006.031.0009.0193.0032.0373.0146.095.0514.0638.0408.1761.1125.3925.2382.5319.3091 1.2263.5608 2.4635.5608.9293 0 1.6712-.5145 2.2105-1.0909.5456-.5832.9936-1.3421 1.3526-2.1048.7186-1.5268 1.1845-3.2947 1.3365-4.3485.2471-1.714-.0142-3.2551-.655-4.4145-.6381-1.15439-1.7055-1.99497-3.0152-2.0359-1.5728-.04915-2.4451.24645-3.1248.59552-.1592.08176-.2839.14959-.3866.20548-.3289.17895-.4329.23555-.7263.23555Z" />
            </svg>
            <span className="text-5xl">{products && products.length}</span>
          </div>
        </li>
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <p className="font-medium text-lg relative">CATEGORY</p>
          <div className='flex justify-between w-full mt-4'>
            <svg className="w-12 h-12 text-[#e46a76] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
            </svg>
            <span className="text-5xl">{category && category.length}</span>
          </div>
        </li>
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <p className="font-medium text-lg relative">Income</p>
          <div className='flex justify-between w-full mt-4'>
            <svg className="w-12 h-12 text-[#fb9678] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
            </svg>
            <span className="text-5xl">18990</span>
          </div>
        </li>
      </ul>
      <ul className="social flex flex-wrap gap-3 mt-10">
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <div className="icon bg-[#3B5998] w-full p-3 flex justify-center max-h-[64px]">
            <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="flex justify-between w-full mt-4">
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Followers</span>
            </p>
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Posts</span>
            </p>
          </div>
        </li>
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <div className="icon bg-[#F86C6B] w-full p-3 flex justify-center max-h-[64px]">
            <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="flex justify-between w-full mt-4">
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Followers</span>
            </p>
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Posts</span>
            </p>
          </div>
        </li>
        <li className="bg-white flex flex-wrap w-[calc(25%_-_9px)] px-4 py-6">
          <div className="icon bg-[#000000] w-full p-3 flex justify-center max-h-[64px]">
            <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 13C7.567 13 6 14.567 6 16.5S7.567 20 9.5 20s3.5-1.567 3.5-3.5S11.433 13 9.5 13Z" />
              <path fillRule="evenodd" d="M11 5c0-.55228.4477-1 1-1 1.5438 0 3.3242.75435 4.5149 2.16836 1.2348 1.46632 1.7886 3.5834.9338 6.14784-.1747.524-.741.8071-1.2649.6325-.524-.1747-.8071-.741-.6325-1.2649.6452-1.93556.199-3.31848-.5662-4.22716C14.4407 6.8102 13.7107 6.37433 13 6.15825V16.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="flex justify-between w-full mt-4">
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Followers</span>
            </p>
            <p className="w-[50%] text-center font-bold text-2xl">456<br />
              <span className="text-[#6c757d] font-normal">Posts</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
