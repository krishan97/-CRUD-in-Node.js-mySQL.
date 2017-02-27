 module.exports=function(express,app,url,fxCall,querystring){
	   var router=express.Router();
	   router.get('/getUsers', function(req,res,next){
		  fxCall.getAllrows(function(err,rows){
		    if(err){ 
		         res.json(err);     
		            
		       } 		      else{
		          var jsonObj = {'success':'1','users':rows};
		    res.json(jsonObj);
		 } } );
	   }); 
	    router.get('/getUsers/:id', function(req,res,next){
	     fxCall.getIdrows(req.params.id,function(err,rows){
		    if(err){ 
		         res.json(err);     
		        } 		
		              else{
		             var jsonObj = {'success':'1','users':rows};        
		    res.json(jsonObj);
		 } } );
	   });
	 
	     router.post('/insert', function(req,res,next){
	    if(!(req.body.userName).trim()){
	                var jsonObj = {'success':'0','message':'Please fill user name field'};  
	                res.json(jsonObj);
	                return;
	          }
	           if(!(req.body.email).trim()){
	                var jsonObj = {'success':'0','message':'Please fill email field'};  
	                res.json(jsonObj);
	                return;
	          }
	           if(!(req.body.address).trim()){
	                var jsonObj = {'success':'0','message':'Please fill address field'};  
	                res.json(jsonObj);
	                return;
	          }
	          if(!(req.body.phone).trim()){
	                var jsonObj = {'success':'0','message':'Please fill phone field'};  
	                res.json(jsonObj);
	                return;
	          }
	          if((req.body.phone).length!='10'){
	                var jsonObj = {'success':'0','message':'Phone number must be 10 digit'};  
	                res.json(jsonObj);
	                return;
	          }
	    fxCall.inserData(req.body,function(err,rows){
		    if(err){ 
		         res.json(err);     
		        } 		
		              else{
		             var jsonObj = {'success':'1','insertId':rows.insertId};        
		    res.json(jsonObj);
		 } } );
		
		    
	   });
	  
	    router.post('/update', function(req,res,next){
	      if(!(req.body.id)){
	                var jsonObj = {'success':'0','message':'Please fill user id field'};  
	                res.json(jsonObj);
	                return;
	          }
	    if(!(req.body.userName).trim()){
	                var jsonObj = {'success':'0','message':'Please fill user name field'};  
	                res.json(jsonObj);
	                return;
	          }
	           if(!(req.body.email).trim()){
	                var jsonObj = {'success':'0','message':'Please fill email field'};  
	                res.json(jsonObj);
	                return;
	          }
	           if(!(req.body.address).trim()){
	                var jsonObj = {'success':'0','message':'Please fill address field'};  
	                res.json(jsonObj);
	                return;
	          }
	          if(!(req.body.phone).trim()){
	                var jsonObj = {'success':'0','message':'Please fill phone field'};  
	                res.json(jsonObj);
	                return;
	          }
	          if((req.body.phone).length!='10'){
	                var jsonObj = {'success':'0','message':'Phone number must be 10 digit'};  
	                res.json(jsonObj);
	                return;
	          }
	          if((req.body.id)){
	                var jsonObj = {'success':'0','message':'Please fill id field'};  
	                res.json(jsonObj);
	                return;
	          }
	    fxCall.updateData(req.body,function(err,rows){
		    if(err){ 
		         res.json(err);     
		        } else{
		             var jsonObj = {'success':'1','message':'update successfylly'};        
		    res.json(jsonObj);
		 } } );
		
		    
	   });
	 router.post('/delete/:id', function(req,res,next){
	    if(!(req.body.id)){
	                var jsonObj = {'success':'0','message':'Please fill user id field'};  
	                res.json(jsonObj);
	                return;
	          }
	     fxCall.deleteRow(req.body.id,function(err,rows){
		    if(err){ 
		         res.json(err);     
		        } 		
		              else{
		             var jsonObj = {'success':'1','message':'Delete Successfully'};        
		    res.json(jsonObj);
		 } } );
	   });	
	 
       app.use('/',router); 
  } 
