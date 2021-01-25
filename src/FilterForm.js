function FilterForm(props) {
    let _gender, _paymethod;
    const submit = e => {
        e.preventDefault();
        props.filterList(_gender.value, _paymethod.value)
    }
    return (
      <div className="Profile">
        <form className="form-inline" onSubmit={submit}>
         <div className="form-group">
             <label for="gender">Filter by gender </label>
             <select name="gender" ref={ input => _gender = input } id="gender">
                 <option value="">All</option>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
                 <option value="Prefer to skip">Not Specified</option>
             </select>
             <label for="paymentMethod">Filter by payment method </label>
             <select name="paymentMethod" ref={ input => _paymethod = input } id="paymentMethod">
                 <option value="">All</option>
                 <option value="cc">CC</option>
                 <option value="money order">Money order</option>
                 <option value="check">Check</option>
                 <option value="paypal">Paypal</option>
             </select>
         </div>
         <input className="pull-right" type="submit" value="  Apply Filter"/>
        </form>
      </div>
    );
  }
  
  export default FilterForm;