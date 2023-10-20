
import useCryptoTaxCalculator from './useCryptoTaxCalculator';

const YourComponent = () => {


  const {
    taxInfo,
    isUnder12,
    isOver12,
    purchasePrice,
    expenses,
    salePrice,
    capitalGain,
    netCapitalGain,
    capitalDiscount,
    totalTax,
    handlePurchasePriceChange,
    handleSalePriceChange,
    handleExpensePriceChange,
    handleIncomeChange,
    handleUnder12Change,
    handleOver12Change
  } = useCryptoTaxCalculator();

  return (
    <div className="flex flex-col lg:flex-row mx-4 mt-4 bg-gray-100 justify-center lg:justify-center items-stretch lg:items-start gap-4">
      <div className="bg-white p-4 lg:p-14 lg:max-w-6xl">
      <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">Free Crypto Tax Calculator - Australia</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="financialYear" className="block">Financial Year</label>
          <select name="financialYear" id="financialYear" required defaultValue="FY 2023-24" className=" p-2 w-full lg:w-64 bg-slate-200 rounded-md">
            <option value="FY 2023-24">FY 2023-24</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block">Country</label>
          <select name="country" id="country" required defaultValue="Australia" className=" p-2 w-full lg:w-64 bg-slate-200 rounded-md">
            <option value="Australia">Australia</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block">Enter purchase price of Crypto</label>
          <input type="text" placeholder="$" className="bg-slate-200 rounded-md p-2 w-full lg:w-64" required value={purchasePrice} onChange={handlePurchasePriceChange}
          />
        </div>
        <div className="mb-4">
          <label className="block">Enter sale price of Crypto</label>
          <input type="text" placeholder="$" className="bg-slate-200 rounded-md p-2 w-full lg:w-64"
          value={salePrice}
          onChange={handleSalePriceChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block">Enter Your Expenses</label>
          <input type="text" placeholder="$" className="bg-slate-200 rounded-md p-2 w-full lg:w-64"
          value={expenses}
          onChange={handleExpensePriceChange}
          />
        </div>
        <div className="flex items-center mb-4 lg:mb-0">
          <label className="mr-2">Investment Type</label>
          <div className='flex items-center'>
            <div className='flex items-center mr-4'>
              <input type='checkbox' id="under12" checked={isUnder12} onChange={handleUnder12Change} className='form-checkbox h-5 w-5 text-blue-500' />
              <label htmlFor="under12" className="ml-2">
                {'<12 years'}
              </label>
            </div>
            <div className='flex items-center '>
              <input type='checkbox' id="over12" checked={isOver12} onChange={handleOver12Change} className='form-checkbox h-5 w-5 text-blue-500' />
              <label htmlFor="Over12" className="ml-2">
                {'>12 years'}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
        <div>
          <div>Select Your Annual Income</div>
          <select name="income" className="border p-2 w-full lg:w-64 bg-slate-200 rounded-md" onChange={handleIncomeChange}>
            <option value="">select an option--</option>
            <option value="$0 - $18200">$0 - $18,200</option>
            <option value="$18201 - $45000">$18,201 - $45,000</option>
            <option value="$45001 - $120000">$45,001 - $120,00</option>
            <option value="$120001 - $180000">$120,001 - $180,000</option>
            <option value="$180001+">$180,001+</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            Tax Rate :
          </div>
          <div> {taxInfo.details}</div>
        </div>
      </div>
      {isOver12 && (
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div>Capital gains amount</div>
            <div className='bg-slate-200 rounded-md  p-2 w-full lg:w-64'>
              <p className=' font-bold'>{capitalGain}</p>
            </div>
          </div>
          <div>
            <div>Discount for long term gains</div>
            <div className='bg-slate-200 rounded-md  p-2 w-full lg:w-64'>
              <p className='font-bold'>{capitalDiscount}</p>
            </div>
          </div>
        </div>
      )}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
        <div className='flex justify-center bg-green-200 flex-col items-center rounded-md lg:w-64'>
          <div>Net Capital tax amount</div>
          <div className=' text-green-900 font-bold'>{netCapitalGain}</div>
        </div>
        <div className=' flex justify-center items-center bg-blue-200 flex-col rounded-md lg:w-64'>
          <div>The tax you need to pay*</div>
          <div className=' text-blue-900 font-bold'>{totalTax}</div>
        </div>
      </div>
     
    </div>

      <div className="flex-shrink-0 w-full lg:w-1/4 h-auto lg:h-2/5 bg-blue-700 rounded-lg p-4 gap-4 flex flex-col items-center">
        <div>
          <h1 className="text-lg lg:text-xl font-bold text-white">Get started with Koinx for Free</h1>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-white">With our range features that you can equip for free, Koinx allows you to be more educated and aware of your tax reports.</p>
        </div>
        <div>
          <img src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCryptoGuide.713906b6.png&w=256&q=75" alt="Koinx" />
        </div>
        <div>
          <button className="bg-white text-blue-700 py-2 px-4 rounded">Get Started for Free</button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

