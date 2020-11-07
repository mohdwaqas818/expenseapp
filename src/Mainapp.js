import React from 'react';

function Mainapp() {
  return (
    <div>
    	
    	<div className="expense-title">
    		<h3>EXPENSE TRACKER</h3>
    	</div>

    	<div className="balance">
            <div><p className="balance-title">YOUR BALANCE <br/> <span className="balance-class">0.00</span></p></div>
        </div>

    	<div className="income-expense">
            <div><p>Income <br/> <span>0.00</span></p></div>
            <div><p>Expense <br/> <span>0.00</span></p></div>
        </div>

        <div className="History">
        	<div>
        		<h3>HISTORY</h3>
        	</div>
        	<div className="product">
        		<p className="product-sec">Camera <span className="product-cost">300</span></p>
        	</div>

        	<div className="product">
        		<p className="product-sec">Car <span className="product-cost">500</span></p>
        	</div>
        </div>

        <div>
        	<div className="transaction">
        		<h3>ADD TRANSACTION</h3>
        		<hr/>
        	</div>
        </div>

        <div>
        	<div className="text">
        		<h3>Text</h3>
        		<input type="text" name="name" id="textbox" className="input-box" />
        	</div>
        </div>

        <div>
        	<div className="amount">
        		<p className="amount-head">Amount <br/> negative-expense and postive-income</p>
        	</div>
        </div>

        <div>
        	<div className="cost">
        		<input type="text" name="name" id="textbox" className="input-box" />
        		<br/>
        		<button type="button" className="block">Add Transaction</button>
        	</div>
        </div>

    </div>
  );
}

export default Mainapp;
