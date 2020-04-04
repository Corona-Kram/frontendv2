import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });