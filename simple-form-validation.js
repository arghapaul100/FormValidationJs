class SimpleFormValidation
{
	validate_form(form, validate_class)
	{
		var elements = document.querySelectorAll(`${form} ${validate_class}`);
		var flag = 0;
		var responseText = "";
		elements.forEach(function(item){
			item.addEventListener('keyup',function(){
				if(item.nextElementSibling !== null)
				{
					item.nextElementSibling.remove();
				}
				
			})
		})
		for(var i = 0; i < elements.length; i++)
		{
			if(elements[i].value == "" || elements[i].value == null)
			{
				flag = elements[i];
				responseText = "This field is required";
				break;
			}
			else if(elements[i].getAttribute('type') == "email")
			{
				var value = elements[i].value;
				var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				var isValid = this.validateEmail(value, regex);
				if(!isValid)
				{
					flag = elements[i];
					responseText = "Invalid email address";
					break;
				}
				
			}
		}
		if(flag == 0)
			return true;
		else
			return {
				element : flag,
				message : responseText
			};
	}

	validateRezex(value, regex) 
	{
		
	 	if(regex.test(value))
	  	{
	    	return true;
	  	}
	  	else
	  	{
	  		return false;
	  	}
	    
	}
}