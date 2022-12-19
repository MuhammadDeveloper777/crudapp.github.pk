


let emails=[];
btnUpdate.style.display='none';
function addEmail() 
{
	emails.push(email.value);
	listemail();
}
function listemail() 
{
	let str=`
		<table border="1" align="center" width="100%" style="background-color:lightgray;color:black">
			<tr>
				<th>sr#</th>
				<th>Email</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
	`;

	for (i=0; i<emails.length; i++) 
	{
		str=str+`
				<tr>
					<td>`+(i+1)+`</td>
					<td>${emails[i]}</td>
					<td>
						<button id="btn2" onclick="editData(${i})">Edit</button>
					<td>
						<button id="btn2" onclick="deleteData(${i})">Delete</button>
					</td>
				</tr>





		`;
	}
	str=str+"</table>";
	main.innerHTML=str;
}

function editData(index) 
{	btnAdd.style.display='none';
	btnUpdate.style.display='block';
	email.value=emails[i];

	//save array location of course clicked
	email_id.value=index;

}
function updateEmail() 
{
	btnAdd.style.display='block';
	btnUpdate.style.display='none';
	emails[email_id.value]=email.value;
	listemail();
}
function deleteData(index) 
{
	emails.splice(index,1);
	listemail();
}