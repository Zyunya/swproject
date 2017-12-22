import { trigger, style, state, transition, animate, group } from '@angular/animations';

export const animations_cstm1 = trigger('someanim', [
	transition(':enter', [style({ transform: 'translateX(-100%)' }), animate(1200)]),
	transition(':leave', [animate('1s ease', style({ transform: 'translate(550px,55px)' }))
	])
]);

export const animations_array =
	[
		trigger('cstmanim1', [
			transition(':enter', [style({ zIndex: '-1', transform: 'translateX(-100%)' }), animate(600)]),
			transition(':leave', [animate('1s ease', style({ transform: 'translate(550px,55px)' }))])
		]),
		trigger('cstmanim2', [
			transition(':enter', [style({ transform: 'translateX(100%)' }), animate(600)]),
			transition(':leave', [animate('1s ease', style({ transform: 'translate(550px,55px)' }))])
		]),
		trigger('scaleanim', [
			transition(':enter', [style({ transform: 'scale(0)' }), animate(1000)]),
			transition(':leave', [animate('1s ease', style({ transform: 'scale(2)' }))]),
		]),
		trigger('handdledanim', [
			state('void',
				style({
					marginTop: '-30%'
				})
			),
			transition('* => void', animate(1000)),
		])
	]

