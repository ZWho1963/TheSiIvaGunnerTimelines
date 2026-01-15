
gsap.registerPlugin(TextPlugin)

gsap.registerPlugin(SplitText);

let animation;
let split = SplitText.create("#welcome", { type: "chars" });
let hwc = document.getElementById("audio"); 
let file_click = document.getElementById("file_click")
function profitttheme() {
	hwc.play();
	setTimeout(() => {
	file_click.play();
	}, 5000);
}

let tl = gsap.timeline();
tl.to(split.chars, {
		x: -150,
		opacity: 0,
		duration: 0.7,
		ease: "power4",
		stagger: 0.04,
		delay: 1.5
	})
	.to("#background", { duration: 2.5, opacity: 1, ease: "in"}, '<')
	.to("#timeline", { duration: 0.1, opacity: 1, ease: "none", delay: 1}, '<')
	.to("#controls", { duration: 0.1, top: 0, ease: "none"}, '<')
	.to("#timeline_container", { duration: 0, overflowY: "auto"})
