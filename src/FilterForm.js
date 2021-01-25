function FilterForm(props) {
    let _gender, _paymethod;
    const submit = e => {
        e.preventDefault();
        props.filterList(_gender.value, _paymethod.value)
        _gender.value="";
        _paymethod.value=""
    }
    return (
      <div className="Profile">
        <form className="form-inline">
         <div className="form-group">
             <label for="gender">Filter by gender</label>
             <select name="gender" ref={ input => _gender = input } id="gender">
                 <option value="all">All</option>
                 <option value="male">Male</option>
                 <option value="female">Female</option>
                 <option value="none">Not Specified</option>
             </select>
             <label for="paymentMethod">Filter by payment method</label>
             <select name="paymentMethod" ref={ input => _paymethod = input } id="paymentMethod">
                 <option value="all">All</option>
                 <option value="cc">CC</option>
                 <option value="money order">Money order</option>
                 <option value="check">Check</option>
                 <option value="paypal">Paypal</option>
             </select>
         </div>
         <submit onClick={submit}>Apply Filter</submit>
        </form>
      </div>
    );
  }
  
  export default FilterForm;