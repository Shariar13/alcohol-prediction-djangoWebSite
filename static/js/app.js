
var rangeOne = document.querySelector('input[name="rangeOne"]'),
	rangeTwo = document.querySelector('input[name="rangeTwo"]'),
	outputOne = document.querySelector('.outputOne'),
	outputTwo = document.querySelector('.outputTwo'),
	inclRange = document.querySelector('.incl-range'),
	updateView = function () {
		if (this.getAttribute('name') === 'rangeOne') {
			outputOne.innerHTML = this.value;
			outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
		} else {
			outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
			outputTwo.innerHTML = this.value
		}
		if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
			inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
			inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
		} else {
			inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
			inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
		}
	};

document.addEventListener('DOMContentLoaded', function () {
	updateView.call(rangeOne);
	updateView.call(rangeTwo);
	$('input[type="range"]').on('mouseup', function () {
		this.blur();
	}).on('mousedown input', function () {
		updateView.call(this);
	});
});



// btn handling

// occasion
/* 	const occasionContainer = document.getElementById('occasion-containers');
	const allOcassionBtn = occasionContainer.getElementsByTagName('input');
	console.log(allOcassionBtn)
	const a = [...allOcassionBtn]
	a.forEach(btn => {
		btn.addEventListener('click', function(e){
			console.log(e.target.value);
			// e.target.nextElementSibling.classList.add('active')
			const current = occasionContainer.getElementsByClassName('active');
			current[0].classList.remove('active');
			e.target.nextElementSibling.classList.add('active')
		})
	});
 */


/* const occasionContainer = document.getElementById('occasion-containers');
const allOcassionBtn = occasionContainer.getElementsByTagName('input');
console.log(allOcassionBtn);

const btnsAll = [...allOcassionBtn]
let res = []
btnsAll.forEach(btn => {
	console.log(btn)
	btn.addEventListener('click',  function(e){
		// res.push(e.target.value)
		if(e.target.checked){
			res.push(e.target.value);
			console.log("ocassion", e.target.value, res)
		}
		else{
			// if(res.includes(e.target.vl))
			console.log(e.target, res.includes(e.target.value));
			const a= res.filter((x,i) => res.indexOf(x) === i);
			console.log(a)
		}
		console.log(e.target.checked)
		
	})
})

const myArray = [1, 2, 3, 4, 5];

const index = myArray.indexOf(2);
const x = myArray.splice(index, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

console.log(res) */


// ---------------------------- new code --------------------------


/* ------------------- ocassion  btn area --------------------- */


let obj = {}

const occasionContainer = document.getElementById('occasion-containers');
const allOcassionBtn = occasionContainer.getElementsByTagName('input');

const allBtnsArray = [...allOcassionBtn]




/* allBtnsArray.forEach(btn => {
	btn.addEventListener('click', function (e) {
		console.log(e.target.value, e.target.checked);
		const o = e.target.value.split(' ');
		console.log(o);
		let s = '';
		o.forEach((e,i)=>{
			s += e + ' ';
		})
		console.log(s)
		allBtnsArray.forEach(btn => {
			btn.nextElementSibling.classList.remove('active')
		})
		btn.nextElementSibling.classList.add('active')

	})
}); */

const containers = document.getElementsByClassName('btn-containers');
console.log(containers)

const x = [...containers]

let allBtn = [];
x.forEach(c => {
	console.log(c.getElementsByTagName('input'));
	const x = c.getElementsByTagName('input')
	allBtn = [...allBtn, ...x]
	// allBtn.push(c.getElementsByTagName('input'))

})
console.log(allBtn)

allBtn.forEach(btn => {
	btn.addEventListener('click', function (e) {
		console.log(e.target.value, e.target.checked);
		
		const getValue = e.target.value.split(' ');
		
		let strValue = '';
		getValue.forEach((value) => {
			strValue += value + ' ';
		})
		console.log(strValue);
		console.log('target', e.target.name);

		obj[e.target.name] = strValue;
		console.log(obj)
		

		const rbtn = e.target.parentElement.parentElement.getElementsByTagName('input');
		const t = [...rbtn]
		console.log(rbtn, t);

		t.forEach(btn => {
			btn.nextElementSibling.classList.remove('active')
		})
		btn.nextElementSibling.classList.add('active')

		// e.target.nextElementSibling.classList.add('active')
		/* const current = occasionContainer.getElementsByClassName('active');
		current[0].classList.remove('active');
		e.target.nextElementSibling.classList.add('active') */
	})
});

console.log(obj)