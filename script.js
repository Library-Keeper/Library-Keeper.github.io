const tilt = $('.js-tilt').tilt({
    glare: true,
    maxGlare: .9,
    scale: 1.5,
});
tilt.on('change', test);  // parameters: event, transforms

function test(event, transforms) {
    console.log(transforms)
}