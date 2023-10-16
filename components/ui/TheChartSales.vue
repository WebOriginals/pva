<template>
	<div>
		<clientonly>
			<apexchart
				type="area"
				height="350"
				:options="chartOptions"
				:series="series"
			></apexchart>
		</clientonly>
	</div>
</template>

<script setup>
const sevenLastDey = [
	'18.08',
	'19.08',
	'20.08',
	'21.08',
	'22.08',
	'23.08',
	'24.08',
];
const sevenLastMaxSale = [100, 41, 140, 80, 105, 91, 148];
const series = [
	{
		name: '',
		data: sevenLastMaxSale,
	},
];
const chartOptions = {
	chart: {
		type: 'area',
		stacked: false,
		height: 350,
		foreColor: '#8E9AC7',
		zoom: {
			type: 'x',
			enabled: false,
			autoScaleYaxis: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	markers: {
		size: 8,
		strokeColors: 'transparent',
	},

	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			inverseColors: false,
			opacityFrom: 1,
			opacityTo: 0,
			stops: [0, 90, 100],
		},
	},
	grid: {
		show: true,
		borderColor: '#324072',
		strokeDashArray: 5,
		position: 'back',
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		row: {
			colors: undefined,
			opacity: 0.5,
		},
		column: {
			colors: undefined,
			opacity: 0.5,
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		categories: sevenLastDey,
	},
	tooltip: {
		custom: function ({ series, seriesIndex, dataPointIndex, w }) {
			return (
				'<div class="arrow_box">' +
				'<span>' +
				series[seriesIndex][dataPointIndex] +
				'</span>' +
				'</div>'
			);
		},
		y: {
			formatter: undefined,
			title: {
				formatter: (seriesName) => seriesName,
			},
		},
	},
};
</script>

<style lang="scss">
.arrow_box {
	@apply py-2 px-4 rounded-lg dark:text-black;
}
</style>
