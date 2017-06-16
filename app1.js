angular.module("comdist", ['ui.router']);

angular.module('comdist').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('page', {
        url:'/',
        views: {
            'header':{
            	templateUrl : 'modules1/header.html',
            	controller: 'headerCtrl'
            },
            'gnm':{
            	templateUrl : 'modules1/gnm.html'
            },
            'footer':{
            	templateUrl : 'modules1/footer.html',
            	controller: 'footerCtrl'
            }
        }
    }).state('page.home', {
        url:'home',
        views: {
            'page@':{
                templateUrl : 'modules1/home.html',
                controller: 'homeCtrl'
            }
        }
    }).state('page.aboutus', {
        url:'aboutus',
        views: {
            'page@':{
                templateUrl : 'modules1/aboutus.html',
                controller: 'aboutusCtrl'
            }
        }
    }).state('page.product', {
        url:'product',
        views: {
            'page@':{
                templateUrl : 'modules1/product.html',
                controller: 'productCtrl'
            }
        }
    }).state('page.alliance', {
        url:'alliance',
        views: {
            'page@':{
                templateUrl : 'modules1/alliance.html',
                controller: 'allianceCtrl'
            }
        }
    }).state('page.contact', {
        url:'contact',
        views: {
            'page@':{
                templateUrl : 'modules1/contact.html',
                controller: 'contactCtrl'
            }
        }
    }).state('page.career', {
        url:'career',
        views: {
            'page@':{
                templateUrl : 'modules1/career.html',
                controller: 'careerCtrl'
            }
        }
    });
}).run(function($rootScope, $state, $stateParams){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }); 
});

angular.module("comdist").controller("headerCtrl", ['$state', function($state){
	var vm = this;
}]);

angular.module("comdist").controller("aboutusCtrl", [function(){
	var vm = this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-aboutus').addClass('active');
	vm.tabClick = function(i){
		$('.aboutus .tab-pane').removeClass('active');
		$('.aboutus .tab-heading div').removeClass('active');
		$('.aboutus .tab' + i).addClass('active');
	};

	var leaderList = [];
	leaderList.push({leaderName:"Karthikeyan Narayanasamy", title:"Chief Executive Officer",lname:"karthik"});
	leaderList.push({leaderName:"GopalaKrishnan", title:"Chief Project Officer", lname:"gopi"});
	leaderList.push({leaderName:"Nikhil Nair", title:"Chief Sales and Marketing Officer", lname:"nikhil"});
	vm.leaderList = leaderList;
}]);
angular.module("comdist").controller("homeCtrl", [function(){
	var vm=this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-home').addClass('active');
	var labelList = [];
	labelList.push({lblid: 1, head:"Technology Products", txt:"The distribution system support for IT products has played a very important role in taking the technology and its products within easy accessibility of all classes of the Indian consumer.", type:"tech"});
	labelList.push({lblid: 2, head:"Hardware Support", txt:"Commnet Hardware support provides the full spectrum of warranty & post-warranty services on behalf of our vendors – Solution design and Consulting,Field Engineering support.", type:"hard"});
	labelList.push({lblid: 3, head:"Business Impact", txt:"We process on systematic process to determine and evaluate the potential effects of an interruption to critical business operations as a result of a disaster, accident or emergency.", type:"impact"});
	vm.labelList = labelList;

	var weGrow = [];
	weGrow.push({weid:"fa fa-diamond",lblhead:"Products Distinctive Standard",lbltxt:"We pay more scrutiny to customer's products the determants of quality, such as design of the product and the ease of use of the product, will help managers price the products accordingly."});
	weGrow.push({weid:"fa fa-thumbs-o-up",lblhead:"One for All Solution",lbltxt:"Commnet offers its unique solution for the customer's One for All - Here we make sure once the customer steps in meets all his requirements. Sophisticated business  products make us more efficient."});
	weGrow.push({weid:"fa fa-handshake-o",lblhead:"Adhesive Business Bond",lbltxt:"Performance, Conformance of the products delivered are the basic adhesive element to our strong bond with customer's.  Commnet service aims to consistently meet or exceed customer requirements or expectations."});
	weGrow.push({weid:"fa fa-line-chart",lblhead:"Competent Team for Success",lbltxt:"Experienced and competent professionals ensure management of quality Product requires insights on various aspects of quality such as understanding the costs and benefits of quality and recognizing the consequences of poor quality."});
	vm.weGrow = weGrow;

	// var testimonial = [];
	// testimonial.push({testid:"1", testcontent:"Just download the Boost app (for Android or iPhone smartphones) and fill in a few details and your site comes alive within minutes.", testlead:"Solomon", testcompany:"Director, G8 Infotech"});
	// testimonial.push({testid:"2", testcontent:"Just the Boost app (for Android or iPhone smartphones) and fill in a few details and your site comes alive within minutes.", testlead:"Thambidurai", testcompany:"Director,  TechnoTech Systems"});
	// testimonial.push({testid:"3", testcontent:"Just download the Boost app (for Android or iPhone smartphones) and fill in a few details and your site comes alive within minutes.", testlead:"Prakash Babu S.M", testcompany:"MD, S.k Systems"});
	// testimonial.push({testid:"4", testcontent:"Just download the Boost app (for Android or iPhone smartphones) and fill in a few details and your site comes alive within minutes.", testlead:"Mahesh Pattabi", testcompany:"MD, Max Worth  Communication Pvt Ltd"});
	// vm.testimonial = testimonial;
}]);
angular.module("comdist").controller("productCtrl", [function(){
	var vm = this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-products').addClass('active');
	
	var productList = [];
	productList.push({pid: "05_01", pname: "CCTV 3+1", feature: ["Sufficient length Negligible resistance",  "Tough and tensile"," 2 x DC-in Plug Wire", "1 x Coxial for Video Transmission", "1 x Audio RCA Pin"], ptype: "cable"});
	productList.push({pid: "05_02", pname: "Armoured Cable", feature: ["Laying indoors", "In tunnel or cable trench", "Unable to bear external mechanical forces", "single core cable in magnetic duct is not permissible.", "Use in power distribution lines or fixed installations"], ptype: "cable"});
	//productList.push({pid: "05_03", pname: "UTP Cable", feature: ["Feature1 Feature1 Feature1 Feature1 Feature1 Feature1", "Feature2", "Feature3", "Feature4", "Feature5"], ptype: "cable"});
	productList.push({pid: "05_04", pname: "Bnc Connector", feature: ["Compression gland type", "Crimp type", "BNC connector consists of a panel mounting assembly with a single connection for the coax centre", "Bulkhead mounting connectors"], ptype: "cable"});
	productList.push({pid: "05_05", pname: "DC Pin", feature: ["AC Main Cord and Power Cord", "VGA Cable", "Networking Cord", "Microphone Cable, CCTV Cable and Cord. ", "Mono P38 to Mono P38 Mic Lead"], ptype: "cable"});
	productList.push({pid: "05_06", pname: "Rg6 & Rg9", feature: ["Triaxial cable", "Twin-axial cable", "Semi-rigid", "Rigid line"], ptype: "cable"});
	productList.push({pid: "05_07", pname: "OFC", feature: ["Superior quality transmissions", "Long distance telecommunications", "Short diameter and lightweight", "Low loss, Wide Broadband & Non-inductive"], ptype: "cable"});
	
	productList.push({pid: "06_01", pname: "Projectors", feature: ["Computer presentations", "Built in Speakers and also equipped with 3.5mm Audio Out put jack to connect with home theater or speaker system", "Focus Lens for a clear crisp picture", "Best for business & home"], ptype: "audiovideo"});
	productList.push({pid: "06_02", pname: "Displays", feature: ["Equipped with a DIGITAL LINK terminal", "Uncompressed HD digital video", "Conference Room", "Retail Shop", "Outdoors"], ptype: "audiovideo"});
	productList.push({pid: "06_03", pname: "Home Theater", feature: ["Optical audio input (digital)", "Coaxial audio input (digital)", "3.5 mm aux input (analogue)", "HDMI Inputs"], ptype: "audiovideo"});
	productList.push({pid: "06_04", pname: "PA Systems", feature: ["In-Built speakers two 15 cm 4 Ohms speaker", "Bluetooth Facility", "USB Player and Equalizer", "USB voice recording facility, records the events in PAN drive"], ptype: "audiovideo"});
	productList.push({pid: "06_05", pname: "AV Conferencing", feature: ["Complete Setup", "Clear and Uninterrupted", "Enables users to communicate online with real-time audio and video.", "Quality product support"], ptype: "audiovideo"});
	
	productList.push({pid: "04_01", pname: "Laptops", feature: ["Everyday Computing", "Lightweight", "All advanced devices", "Built for Business", "Higher-Resolution Screens"], ptype: "itprod"});
	productList.push({pid: "04_02", pname: "Desktop", feature: ["Latest Technology", "High configuration systems", "Quality entrusted", "Service support"], ptype: "itprod"});
	productList.push({pid: "04_03", pname: "Computer Accessories", feature: ["Keyboard", "Mouse", "Cpu Panel", "Web Cameras", "Speakers"], ptype: "itprod"});
	productList.push({pid: "04_04", pname: "Server & Storge", feature: ["External Hard Drive", "Solid State Drive (SSD)", "Network Attached Storage (NAS)", "USB Thumb Drive Or Flash Drive", "ptical Drive (CD/ DVD)"], ptype: "itprod"});
	//productList.push({pid: "04_05", pname: "Hard Disk", feature: ["Feature1", "Feature2", "Feature3", "Feature4", "Feature5"], ptype: "itprod"});
	// productList.push({pid: "04_06", pname: "Processors", feature: ["Feature1", "Feature2", "Feature3", "Feature4", "Feature5"], ptype: "itprod"});

	productList.push({pid: "03_01", pname: "Raised Floor", feature: ["Application type (data center, retail, office, etc.)", "Cooling System/Air Distribution Setup", "Cabling/Wiring Needs (Including routing and distribution/delivery)", "Weight & Load Capabilities", "Low Profile Access Floor (Cable Management Floor) & Standard/Traditional Access Floors"], ptype: "datacenter"});
	productList.push({pid: "03_02", pname: "CCU", feature: ["Room Cooling", "High Density Cooling", "Modular Datacenter Cooling", "Air Handling Units", "Chiller Units", "Control & Monitering"], ptype: "datacenter"});
	productList.push({pid: "03_03", pname: "Environmental Monitering", feature: ["Protection of public water supplies", "Weather forecasting", "Economic development and land planning", "Global climate change", "Natural resources protection and management"], ptype: "datacenter"});
	productList.push({pid: "03_04", pname: "FM200", feature: ["Best warranty in the fire protection industry", "Low global warming potential", "Zero ozone depleting potential", "Extensive line of fire protection accessories", "Simplified installation"], ptype: "datacenter"});
	//productList.push({pid: "03_05", pname: "Rodent Systems", feature: ["Emits high frequency sound waves that effectively repel rodents", "Sound is completely inaudible to people and non-rodent pets", "Emits high frequency sound waves that effectively repel rodents", "Varying ultrasonic sound waves prevents rodents from getting used to the Victor Sonic PestChaser"], ptype: "datacenter"});
	productList.push({pid: "03_06", pname: "Water Leakage Systems", feature: ["Passive leak detection systems", "Active leak detection systems", "Individual Appliance", "Whole house systems"], ptype: "datacenter"});

	productList.push({pid: "02_01", pname: "CCTV", feature: ["Advanced CCTV Products", "Digital Video Recorders (DVR)", "Dome Cameras", "Box Cameras", "Quality Surveillance"], ptype: "secsys"});
	productList.push({pid: "02_02", pname: "Fire Alarm", feature: ["Domestic Smoke Alarms", "A fire alarm system with manual call points, connected to the fire brigade.", " A fire alarm system with manual call points, not connected to the fire brigade.", "A Type 3 fire detection and alarm system, not connected to the fire brigade.", "A Type 4 fire detection and alarm system, not connected to the fire brigade."], ptype: "secsys"});
	productList.push({pid: "02_03", pname: "Time & Attendance", feature: ["Flexible time-tracking options", "Keeps accurate time", "Tracks all time issues, Mobile compatibility","Integration options","Proactive alerts & Audit trail feature"], ptype: "secsys"});
	productList.push({pid: "02_04", pname: "Intrusion", feature: ["Network-based IDS", "Host-based IDS", "Application-based IDS", "Deeper on Network intrusion detection and prevention and malware removal", "Cost-Benefit Analysis"], ptype: "secsys"});
	productList.push({pid: "02_05", pname: "Video Door Phones", feature: ["Video door entry systems with access control", "Hi-Tech VDP", "Villa VDP", "Executive VDP", "Ultimate VDP"], ptype: "secsys"});
	
	productList.push({pid: "01_01", pname: "Routers", feature: ["Broadband Routers", "Wireless Routers", "Inter-provider Border Router", "Core Router, Edge Router", "Subscriber Edge Router"], ptype: "network"});
	productList.push({pid: "01_02", pname: "Switches", feature: ["LAN Switch or Active Hub", "Unmanaged Network Switches", "Managed Switches", "Circuit-Switching version Packet-Switching", "Advanced routing and switching considerations:"], ptype: "network"});
	productList.push({pid: "01_03", pname: "Racks", feature: ["Server Racks (aka cabinet racks, equipment racks, 4Post racks)", "Open Frame racks (aka 4post racks)", "2Post (aka Relay racks, Telco racks)", "Transport racks, Portable racks.","Wall Mount racks."], ptype: "network"});
	productList.push({pid: "01_04", pname: "Patch Panels", feature: ["Category 7 Patch Panels", "Category 6A Patch Panels", "Category 6 Patch Panels", "Category 5e Patch Panels", "Fiber Patch Panels"], ptype: "network"});
	productList.push({pid: "01_05", pname: "Network Cords", feature: ["Patch Cord", "Pig-Tail Cord", "SE Patch Cord", "Phase Plate", "I/O Jack"], ptype: "network"});
	productList.push({pid: "01_06", pname: "OFC-LIU/Media converter", feature: ["Copper-to-Fiber Media Converters", "Fiber to Fiber Media Converters", "Standalone and Chassis-Based Media Converters", "Unmanaged and Managed Media Converters"], ptype: "network"});
	vm.filterValue = "secsys";
	vm.productList = productList;
	vm.activeIndex = 0;
	vm.productType = [	{pname: "SECURITY SYSTEMS", ptype:"secsys"},
	 					{pname: "NETWORKING SYSTEMS", ptype:"network"},
	 					{pname: "IT-PRODUCTS", ptype:"itprod"},
	 					{pname: "DATA CENTER PRODUCTS", ptype:"datacenter"},
	 					{pname: "CABLE PRODUCTS",ptype:"cable"},
	 					{pname: "AV PRODUCTS", ptype:"audiovideo"}
	 				];
	vm.productSearch = function(strProductType, index) {
		vm.filterValue = strProductType;
		vm.activeIndex = index;
	};
	
}]);

angular.module("comdist").controller("allianceCtrl", [function() {
	var vm = this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-alliance').addClass('active');
	vm.businessAlies = [
		{pname:"kb", ptype:"alliance",pdis:"CCTV - Know more about our strong bond on delivering quality services & products",plink:"http://www.3m.com/"},
		{pname:"bosch", ptype:"alliance",pdis:"PA Systems - Know more about our strong bond on delivering quality services & products",plink:"http://www.boschindia.com/"},
		{pname:"cp", ptype:"alliance",pdis:"CCTV - Know more about our strong bond on delivering quality services & products",plink:"http://www.cpplusworld.com/"},
		{pname:"dahua", ptype:"alliance",pdis:"CCTV - Know more about our strong bond on delivering quality services & products",plink:"http://www.dahuasecurity.com/"},
		{pname:"del", ptype:"alliance",pdis:"Laptops - Know more about our strong bond on delivering quality services & products",plink:"http://www.dell.com/"},
		{pname:"epson", ptype:"alliance",pdis:"Projectors - Know more about our strong bond on delivering quality services & products",plink:"https://www.epson.co.in/"},
		{pname:"essl", ptype:"alliance",pdis:"Intrusion - Know more about our strong bond on delivering quality services & products",plink:"http://esslsecurity.com/"},
		{pname:"hikvis", ptype:"alliance",pdis:"CCTV - Know more about our strong bond on delivering quality services & products",plink:"http://www.hikvision.com/"},
		{pname:"hw", ptype:"alliance",pdis:"Datacenter - Know more about our strong bond on delivering quality services & products",plink:"https://www.honeywell.com/"},
		{pname:"3m", ptype:"alliance",pdis:"Raised Flooring - Know more about our strong bond on delivering quality services & products",plink:"http://kbvisiongroup.com/"},
		{pname:"lg", ptype:"alliance",pdis:"Displays - Know more about our strong bond on delivering quality services & products",plink:"http://www.lg.com/in"},
		{pname:"panasonic", ptype:"alliance",pdis:"Projectors - Know more about our strong bond on delivering quality services & products",plink:"http://www.panasonic.com/in/"},
		{pname:"ravel", ptype:"alliance",pdis:"Fire Alarm - Know more about our strong bond on delivering quality services & products",plink:"http://ravelfire.com/"},
		{pname:"ss", ptype:"alliance",pdis:"Fire Alarm - Know more about our strong bond on delivering quality services & products",plink:"https://www.systemsensor.com/"},
		{pname:"unv", ptype:"alliance",pdis:"CCTV - Know more about our strong bond on delivering quality services & products",plink:"http://en.uniview.com/"}
	];
}]);

angular.module("comdist").controller("careerCtrl", [function() {
	var vm = this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-career').addClass('active');
	
}]);

angular.module("comdist").controller("contactCtrl", [function() {
	var vm = this;
	$('.header .list-inline li a').removeClass('active');
	$('.mnu-contact').addClass('active');
	
}]);

angular.module("comdist").controller("footerCtrl", ['$state', function($state){
	var vm = this;
}]);