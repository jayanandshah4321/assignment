import React from 'react';
import Comp1 from './Comp';
import CustomizedTables from './Table';

const Price = () => {
    return (
        <div className="min-h-screen w-full bg-pageBg flex items-center justify-center w-full ">
            <div className="w-full max-w-3xl flex flex-col border border-gray-700 rounded-xl space-y-5 px-5 sm:px-8 py-6 bg-componentBg text-white shadow-lg">
                <div>
                    <h1 className="text-2xl font-bold text-blue-300 text-left ">API Pricing</h1>
                    <p className="text-sm-textcolor mt-2 text-left ">
                        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                    </p>
                </div>

                <CustomizedTables />

                <Comp1
                    heading={"Token Estimation"}
                    content={"On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool."}
                />

                <Comp1
                    heading={"Billing"}
                    content={"You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard."}
                />
            </div>
        </div>
    );
}

export default Price;
