// Object <mode>

var styleOwn;
var CreateClick;
// ultimate variable
var canvas,ctx;

var Tstyle = {
  color: function(idname,color) {
    var createId = document.getElementById(idname);
    createId.style.color=color;
  },
  background: function(idname,background) {
    var createId = document.getElementById(idname);
    createId.style.background=background;
  },
  backgroundImg : function(idname,url) {
    var createId = document.getElementById(idname);
    createId.style.background=url;
    createId.style.backgroundSize="cover";
  }
};

var Thinker = {
  SetClick : function(idname) {
    CreateClick = document.getElementById(idname);
    CreateClick.addEventListener("click",TheClick);
  },
  SetAnimation : function(name) {
    requestAnimationFrame(name);
  }
};

function T(idname) {
  styleOwn = document.querySelector(idname);
}


// inter Mode

function $SetAlert$ () {
  alert("hello");
}

// Application Mode

function CreateVideo(url,width,height) {
  var video = document.createElement("video");
  video.width = width;
  video.height = height;
  video.src=url;
  video.play();
  document.body.appendChild(video);
}

function CreateAudio(url,loop) {
  var audio = document.createElement("audio");
  audio.src=url;
  audio.play();
  document.body.appendChild(audio);
  audio.loop = loop;
}

function GameBackgroundM(url) {
  var audio = document.createElement("audio");
  audio.src=url;
  audio.play();
  audio.loop = true;
}

function CreateCanvas(width,height) {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.width=width;
  canvas.height=height;
  canvas.id="canvas";
  document.body.appendChild(canvas);
}

var Canvas = {
  ColorRect : function(color,x,y,width,height) {
    ctx.fillStyle="#000";
    ctx.fillRect(x,y,width,height);
  },
  Circle : function(color,x,y,r,stuff) {
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x,y,r,0,Math.PI*2,stuff);
    ctx.fill();
  },
  clearCanvasRect : function(x,y,width,height) {
    ctx.clearRect(x,y,width,height);
  }
};

function requestGifBackground(idname,url) {
  var createId = document.getElementById(idname);
  createId.style.background=url;
  createId.backgroundSize="cover";
}

Setup = {
    playerMovement : function(px,py,ps) {
      document.addEventListener("keydown", event => {
        switch (event.keyCode) {
          case 37:
              px -= ps;
            break;
          case 39:
            px +=ps;
            break;
          case 38:
            py -= ps;
            break;
          case 40:
            py += ps;
            break
        }
      })
    },
    player : {
      x: 60,
      y:60
    }
};


function UsingDummyTextEdit(className,text) {
  document.write('<p class="' + className + '">'+ text +'</p>');
}

function UsingDummyText(className) {
  document.write("<p class='"+ className +"'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>");
};

function AniText(idname,text,ani) {
  var createId = document.getElementById(idname);
  createId.textContent=text;
};


// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

function slider(idname) {
   var createId = document.getElementById();
}


var Thinker = function(self, undefined) {

self = self || require('./node/self.js');
var window = self.window,
	document = self.document;

var Base = new function() {
	var hidden = /^(statics|enumerable|beans|preserve)$/,
		array = [],
		slice = array.slice,
		create = Object.create,
		describe = Object.getOwnPropertyDescriptor,
		define = Object.defineProperty,

		forEach = array.forEach || function(iter, bind) {
			for (var i = 0, l = this.length; i < l; i++) {
				iter.call(bind, this[i], i, this);
			}
		},

		forIn = function(iter, bind) {
			for (var i in this) {
				if (this.hasOwnProperty(i))
					iter.call(bind, this[i], i, this);
			}
		},

		set = Object.assign || function(dst) {
			for (var i = 1, l = arguments.length; i < l; i++) {
				var src = arguments[i];
				for (var key in src) {
					if (src.hasOwnProperty(key))
						dst[key] = src[key];
				}
			}
			return dst;
		},

		each = function(obj, iter, bind) {
			if (obj) {
				var desc = describe(obj, 'length');
				(desc && typeof desc.value === 'number' ? forEach : forIn)
					.call(obj, iter, bind = bind || obj);
			}
			return bind;
		};

	function inject(dest, src, enumerable, beans, preserve) {
		var beansNames = {};

		function field(name, val) {
			val = val || (val = describe(src, name))
					&& (val.get ? val : val.value);
			if (typeof val === 'string' && val[0] === '#')
				val = dest[val.substring(1)] || val;
			var isFunc = typeof val === 'function',
				res = val,
				prev = preserve || isFunc && !val.base
						? (val && val.get ? name in dest : dest[name])
						: null,
				bean;
			if (!preserve || !prev) {
				if (isFunc && prev)
					val.base = prev;
				if (isFunc && beans !== false
						&& (bean = name.match(/^([gs]et|is)(([A-Z])(.*))$/)))
					beansNames[bean[3].toLowerCase() + bean[4]] = bean[2];
				if (!res || isFunc || !res.get || typeof res.get !== 'function'
						|| !Base.isPlainObject(res)) {
					res = { value: res, writable: true };
				}
				if ((describe(dest, name)
						|| { configurable: true }).configurable) {
					res.configurable = true;
					res.enumerable = enumerable != null ? enumerable : !bean;
				}
				define(dest, name, res);
			}
		}
		if (src) {
			for (var name in src) {
				if (src.hasOwnProperty(name) && !hidden.test(name))
					field(name);
			}
			for (var name in beansNames) {
				var part = beansNames[name],
					set = dest['set' + part],
					get = dest['get' + part] || set && dest['is' + part];
				if (get && (beans === true || get.length === 0))
					field(name, { get: get, set: set });
			}
		}
		return dest;
	}

	function Base() {
		for (var i = 0, l = arguments.length; i < l; i++) {
			var src = arguments[i];
			if (src)
				set(this, src);
		}
		return this;
	}

	return inject(Base, {
		inject: function(src) {
			if (src) {
				var statics = src.statics === true ? src : src.statics,
					beans = src.beans,
					preserve = src.preserve;
				if (statics !== src)
					inject(this.prototype, src, src.enumerable, beans, preserve);
				inject(this, statics, null, beans, preserve);
			}
			for (var i = 1, l = arguments.length; i < l; i++)
				this.inject(arguments[i]);
			return this;
		},

		extend: function() {
			var base = this,
				ctor,
				proto;
			for (var i = 0, obj, l = arguments.length;
					i < l && !(ctor && proto); i++) {
				obj = arguments[i];
				ctor = ctor || obj.initialize;
				proto = proto || obj.prototype;
			}
			ctor = ctor || function() {
				base.apply(this, arguments);
			};
			proto = ctor.prototype = proto || create(this.prototype);
			define(proto, 'constructor',
					{ value: ctor, writable: true, configurable: true });
			inject(ctor, this);
			if (arguments.length)
				this.inject.apply(ctor, arguments);
			ctor.base = base;
			return ctor;
		}
	}).inject({
		enumerable: false,

		initialize: Base,

		set: Base,

		inject: function() {
			for (var i = 0, l = arguments.length; i < l; i++) {
				var src = arguments[i];
				if (src) {
					inject(this, src, src.enumerable, src.beans, src.preserve);
				}
			}
			return this;
		},

		extend: function() {
			var res = create(this);
			return res.inject.apply(res, arguments);
		},

		each: function(iter, bind) {
			return each(this, iter, bind);
		},

		clone: function() {
			return new this.constructor(this);
		},

		statics: {
			set: set,
			each: each,
			create: create,
			define: define,
			describe: describe,

			clone: function(obj) {
				return set(new obj.constructor(), obj);
			},

			isPlainObject: function(obj) {
				var ctor = obj != null && obj.constructor;
				return ctor && (ctor === Object || ctor === Base
						|| ctor.name === 'Object');
			},

			pick: function(a, b) {
				return a !== undefined ? a : b;
			},

			slice: function(list, begin, end) {
				return slice.call(list, begin, end);
			}
		}
	});
};
};


function SetSlider(img) {
  var i = 0; 			// Start Point
  var images = [];	// Images Array
  var time = 3000/30;	// Time Between Switch

  // Image List
  images[0] = "http://lorempixel.com/400/200/animals";
  images[1] = "http://lorempixel.com/400/200/sports";
  images[2] = "http://lorempixel.com/400/200/food";
  images[3] = "http://lorempixel.com/400/200/people";

  // Change Image
  function changeImg(){
  	document.slide.src = images[i];

  	// Check If Index Is Under Max
  	if(i < images.length - 1){
  	  // Add 1 to Index
  	  i++;
  	} else {
  		// Reset Back To O
  		i = 0;
  	}

  	// Run function every x seconds
  	setTimeout("changeImg()", time);
  }

  // Run function when page loads
  window.onload=changeImg;
}

var UT = {
  setUPCanvas : function(idname) {
    var canvas = document.getElementById(idname);
    ctx = canvas.getContext("2d");
  }
};
