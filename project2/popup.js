
window.onload = function() {

	var peer = new Peer(); 

	peer.on('open', function(id) {
	  console.log('My peer ID is: ' + id);
	  document.getElementById("yourID").innerHTML = "Or give them yours: <br>" + id;
	});

	var gobutton = document.getElementById("gobutton");
	gobutton.onclick = function()
	{
		var friendID = document.getElementById("friendID").value
		var conn = peer.connect(friendID);
		
		document.getElementById("errormsg").innerHTML = "";
		
	};

	peer.on('connection', function(conn) {
		
		conn.on('open', function() {
		  // Receive messages
		  conn.on('data', function(data) {
			console.log('Received', data);
		  });

		  // Send messages
		  conn.send('Hello!');
		});
		
		
	});

	peer.on('error', function(err) {
		
		document.getElementById("errormsg").innerHTML = "Error: " + err.type;
		
	});
	
	// Page 2
	
	
	sendbutton.onclick = function()
	{
		var msgToSend = document.getElementById("enterchat").value;
		AddChatText( msgToSend, "Me" );
		
		document.getElementById("enterchat").value = "";
		
	};
	
	

};

function AddChatText( text, sender="Bot" )
{
	
	var list = document.getElementById('chatlist');
	
	var entry = document.createElement('li');
	
	var realentry = document.createElement('user1msg');
	
	realentry.appendChild(document.createTextNode( sender + ": " + text ));
	
	entry.appendChild( realentry );
	
	list.appendChild( entry );
	
}

