(() => {
    "use strict";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    document.addEventListener("DOMContentLoaded", () => {
        const lenis = initSmoothScroll();

        setCurrentYear();
        initNavigation(lenis);
        initTyping();
        initThreeBackground();
        initCursor();
        initDynamicLighting();
        initTilt();
        initMagneticButtons();
        initAnimations();
        initCounters();
        initProjectFilters();
        initContactForm();
        initHeroParallax();
    });

    function setCurrentYear() {
        const year = document.querySelector("#year");
        if (year) year.textContent = new Date().getFullYear();
    }

    function initSmoothScroll() {
        if (prefersReducedMotion || !window.Lenis) return null;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.88,
            touchMultiplier: 1.4
        });

        if (window.ScrollTrigger) {
            lenis.on("scroll", ScrollTrigger.update);
        }

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return lenis;
    }

    function initNavigation(lenis) {
        const header = document.querySelector("#site-header");
        const navToggle = document.querySelector("#nav-toggle");
        const navMenu = document.querySelector("#nav-menu");
        const navLinks = document.querySelectorAll(".nav-menu a");
        const backToTop = document.querySelector("#back-to-top");

        const setHeaderState = () => {
            const scrolled = window.scrollY > 18;
            header?.classList.toggle("scrolled", scrolled);
            backToTop?.classList.toggle("visible", window.scrollY > 640);
        };

        setHeaderState();
        window.addEventListener("scroll", setHeaderState, { passive: true });

        const closeMenu = () => {
            document.body.classList.remove("menu-open");
            navMenu?.classList.remove("active");
            navToggle?.setAttribute("aria-expanded", "false");
            navToggle?.querySelector("i")?.classList.remove("bx-x");
            navToggle?.querySelector("i")?.classList.add("bx-menu");
        };

        navToggle?.addEventListener("click", () => {
            const isOpen = navMenu?.classList.toggle("active");
            document.body.classList.toggle("menu-open", Boolean(isOpen));
            navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
            navToggle.querySelector("i")?.classList.toggle("bx-menu", !isOpen);
            navToggle.querySelector("i")?.classList.toggle("bx-x", Boolean(isOpen));
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const targetId = link.getAttribute("href");
                if (!targetId || targetId === "#") return;

                const target = document.querySelector(targetId);
                if (!target) return;

                event.preventDefault();
                closeMenu();

                if (lenis) {
                    lenis.scrollTo(target, { offset: -92 });
                } else {
                    const top = target.getBoundingClientRect().top + window.scrollY - 92;
                    window.scrollTo({
                        top,
                        behavior: prefersReducedMotion ? "auto" : "smooth"
                    });
                }
            });
        });

        backToTop?.addEventListener("click", () => {
            if (lenis) {
                lenis.scrollTo(0);
            } else {
                window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
            }
        });

        const activeSections = Array.from(navLinks)
            .map((link) => {
                const id = link.getAttribute("href");
                return id ? { link, section: document.querySelector(id) } : null;
            })
            .filter((item) => item && item.section);

        const setActive = (id) => {
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        };

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActive(entry.target.id);
                    });
                },
                { rootMargin: "-38% 0px -52% 0px", threshold: 0.02 }
            );

            activeSections.forEach(({ section }) => observer.observe(section));
        }
    }

    function initTyping() {
        const typed = document.querySelector("#typed-role");
        if (!typed) return;

        const roles = [
            "Frontend Developer",
            "UI Designer",
            "IoT Explorer",
            "Software Tester",
            "Creative Technologist"
        ];

        if (prefersReducedMotion) {
            typed.textContent = roles[0];
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const tick = () => {
            const currentRole = roles[roleIndex];

            if (!deleting) {
                typed.textContent = currentRole.slice(0, charIndex + 1);
                charIndex += 1;

                if (charIndex === currentRole.length) {
                    deleting = true;
                    window.setTimeout(tick, 1250);
                    return;
                }
            } else {
                typed.textContent = currentRole.slice(0, charIndex - 1);
                charIndex -= 1;

                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }

            const delay = deleting ? 42 : 72 + Math.random() * 36;
            window.setTimeout(tick, delay);
        };

        tick();
    }

    function initThreeBackground() {
        const canvas = document.querySelector("#space-canvas");
        if (!canvas || !window.THREE) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 7.8;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: false,
            powerPreference: "high-performance"
        });

        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const particleGroup = new THREE.Group();
        scene.add(particleGroup);

        const createField = ({ count, spread, size, opacity }) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const color = new THREE.Color();

            for (let i = 0; i < count; i += 1) {
                const index = i * 3;
                positions[index] = (Math.random() - 0.5) * spread;
                positions[index + 1] = (Math.random() - 0.5) * spread * 0.72;
                positions[index + 2] = (Math.random() - 0.5) * spread;

                const hue = 0.47 + Math.random() * 0.12;
                const saturation = 0.55 + Math.random() * 0.32;
                const lightness = 0.58 + Math.random() * 0.3;
                color.setHSL(hue, saturation, lightness);
                colors[index] = color.r;
                colors[index + 1] = color.g;
                colors[index + 2] = color.b;
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size,
                transparent: true,
                opacity,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const points = new THREE.Points(geometry, material);
            particleGroup.add(points);
            return points;
        };

        const mobile = window.innerWidth < 768;
        const particles = createField({
            count: mobile ? 780 : 1550,
            spread: 18,
            size: mobile ? 0.024 : 0.018,
            opacity: 0.78
        });
        const stars = createField({
            count: mobile ? 520 : 1150,
            spread: 28,
            size: mobile ? 0.012 : 0.01,
            opacity: 0.46
        });

        const mouse = { x: 0, y: 0 };
        const target = { x: 0, y: 0 };
        const clock = new THREE.Clock();

        window.addEventListener(
            "pointermove",
            (event) => {
                target.x = (event.clientX / window.innerWidth - 0.5) * 2;
                target.y = (event.clientY / window.innerHeight - 0.5) * 2;
            },
            { passive: true }
        );

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", onResize, { passive: true });

        const animate = () => {
            const elapsed = clock.getElapsedTime();

            mouse.x += (target.x - mouse.x) * 0.035;
            mouse.y += (target.y - mouse.y) * 0.035;

            if (!prefersReducedMotion) {
                particles.rotation.y = elapsed * 0.032 + mouse.x * 0.12;
                particles.rotation.x = mouse.y * 0.08;
                stars.rotation.y = -elapsed * 0.014 + mouse.x * 0.04;
                stars.rotation.x = elapsed * 0.006 + mouse.y * 0.04;
                particleGroup.position.x = mouse.x * 0.16;
                particleGroup.position.y = -mouse.y * 0.12;
                camera.position.x += (mouse.x * 0.36 - camera.position.x) * 0.03;
                camera.position.y += (-mouse.y * 0.24 - camera.position.y) * 0.03;
                camera.lookAt(scene.position);
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();
    }

    function initCursor() {
        if (!finePointer || prefersReducedMotion) return;

        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");
        if (!dot || !ring) return;

        document.body.classList.add("has-custom-cursor");

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const follower = { x: mouse.x, y: mouse.y };

        window.addEventListener(
            "mousemove",
            (event) => {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
                dot.style.left = `${mouse.x}px`;
                dot.style.top = `${mouse.y}px`;
            },
            { passive: true }
        );

        const moveFollower = () => {
            follower.x += (mouse.x - follower.x) * 0.16;
            follower.y += (mouse.y - follower.y) * 0.16;
            ring.style.left = `${follower.x}px`;
            ring.style.top = `${follower.y}px`;
            requestAnimationFrame(moveFollower);
        };

        moveFollower();

        document.querySelectorAll("a, button, input, textarea, .glow-card, [data-tilt]").forEach((element) => {
            element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
            element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
        });
    }

    function initDynamicLighting() {
        const litElements = document.querySelectorAll(".glow-card, .project-card, .service-card, .featured-project");

        litElements.forEach((element) => {
            element.addEventListener(
                "pointermove",
                (event) => {
                    const rect = element.getBoundingClientRect();
                    const x = ((event.clientX - rect.left) / rect.width) * 100;
                    const y = ((event.clientY - rect.top) / rect.height) * 100;
                    element.style.setProperty("--pointer-x", `${x}%`);
                    element.style.setProperty("--pointer-y", `${y}%`);
                },
                { passive: true }
            );

            element.addEventListener("pointerleave", () => {
                element.style.setProperty("--pointer-x", "50%");
                element.style.setProperty("--pointer-y", "50%");
            });
        });
    }

    function initTilt() {
        if (!window.VanillaTilt || !finePointer || prefersReducedMotion) return;

        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 8,
            speed: 760,
            perspective: 1100,
            scale: 1.018,
            glare: true,
            "max-glare": 0.16
        });
    }

    function initMagneticButtons() {
        if (!finePointer || prefersReducedMotion) return;

        document.querySelectorAll(".magnetic").forEach((element) => {
            element.addEventListener("mousemove", (event) => {
                const rect = element.getBoundingClientRect();
                const x = event.clientX - rect.left - rect.width / 2;
                const y = event.clientY - rect.top - rect.height / 2;
                const strength = element.classList.contains("btn") ? 0.22 : 0.14;

                if (window.gsap) {
                    gsap.to(element, {
                        x: x * strength,
                        y: y * strength,
                        duration: 0.42,
                        ease: "power3.out"
                    });
                } else {
                    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
                }
            });

            element.addEventListener("mouseleave", () => {
                if (window.gsap) {
                    gsap.to(element, { x: 0, y: 0, duration: 0.52, ease: "elastic.out(1, 0.36)" });
                } else {
                    element.style.transform = "";
                }
            });
        });
    }

    function initAnimations() {
        if (!window.gsap || prefersReducedMotion) {
            document.querySelectorAll(".reveal, .reveal-hero").forEach((element) => {
                element.style.opacity = "1";
                element.style.transform = "none";
                element.style.filter = "none";
            });
            return;
        }

        if (window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.set(".reveal-hero", { autoAlpha: 0, y: 34, filter: "blur(14px)" });
        gsap.timeline({ defaults: { ease: "power4.out" } }).to(".reveal-hero", {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            stagger: 0.1,
            delay: 0.18
        });

        if (!window.ScrollTrigger) {
            gsap.set(".reveal", { autoAlpha: 1, y: 0, filter: "blur(0px)" });
            return;
        }

        gsap.utils.toArray(".reveal").forEach((element) => {
            gsap.fromTo(
                element,
                { autoAlpha: 0, y: 46, filter: "blur(12px)" },
                {
                    autoAlpha: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.95,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 84%",
                        once: true
                    }
                }
            );
        });

        gsap.from(".timeline-beam", {
            scaleY: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 78%",
                end: "bottom 72%",
                scrub: 1
            }
        });
    }

    function initCounters() {
        const counters = document.querySelectorAll(".counter[data-count]");
        if (!counters.length) return;

        const animateCounter = (counter) => {
            if (counter.dataset.counted === "true") return;
            counter.dataset.counted = "true";

            const target = Number(counter.dataset.count || 0);

            if (window.gsap && !prefersReducedMotion) {
                const state = { value: 0 };
                gsap.to(state, {
                    value: target,
                    duration: 1.7,
                    ease: "power2.out",
                    onUpdate: () => {
                        counter.textContent = String(Math.round(state.value));
                    }
                });
            } else {
                counter.textContent = String(target);
            }
        };

        if (window.ScrollTrigger && !prefersReducedMotion) {
            counters.forEach((counter) => {
                ScrollTrigger.create({
                    trigger: counter,
                    start: "top 86%",
                    once: true,
                    onEnter: () => animateCounter(counter)
                });
            });
            return;
        }

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateCounter(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.45 }
            );
            counters.forEach((counter) => observer.observe(counter));
        } else {
            counters.forEach(animateCounter);
        }
    }

    function initProjectFilters() {
        const buttons = document.querySelectorAll(".filter-btn");
        const cards = document.querySelectorAll(".project-card");
        if (!buttons.length || !cards.length) return;

        const showCard = (card, index) => {
            if (window.gsap) gsap.killTweensOf(card);
            card.hidden = false;
            card.classList.remove("is-hidden");

            if (window.gsap && !prefersReducedMotion) {
                gsap.fromTo(
                    card,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.34, delay: index * 0.035, ease: "power2.out" }
                );
            } else {
                card.style.opacity = "1";
            }
        };

        const hideCard = (card) => {
            if (window.gsap) gsap.killTweensOf(card);
            card.classList.add("is-hidden");

            if (window.gsap && !prefersReducedMotion) {
                gsap.to(card, {
                    autoAlpha: 0,
                    duration: 0.22,
                    ease: "power2.out",
                    onComplete: () => {
                        card.hidden = true;
                    }
                });
            } else {
                card.hidden = true;
            }
        };

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const filter = button.dataset.filter || "all";

                buttons.forEach((item) => {
                    const active = item === button;
                    item.classList.toggle("active", active);
                    item.setAttribute("aria-pressed", String(active));
                });

                let visibleIndex = 0;
                cards.forEach((card) => {
                    const categories = (card.dataset.category || "").split(/\s+/);
                    const visible = filter === "all" || categories.includes(filter);

                    if (visible) {
                        showCard(card, visibleIndex);
                        visibleIndex += 1;
                    } else {
                        hideCard(card);
                    }
                });

                if (window.ScrollTrigger) {
                    window.setTimeout(() => ScrollTrigger.refresh(), 360);
                }
            });
        });
    }

    function initContactForm() {
        const form = document.querySelector("#contact-form");
        const status = document.querySelector("#form-status");
        if (!form) return;

        const validators = {
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
            phone: (value) => value === "" || /^[+\d][\d\s()-]{7,}$/.test(value)
        };

        const setStatus = (message, type = "") => {
            if (!status) return;
            status.textContent = message;
            status.className = `form-status ${type}`.trim();
        };

        const validateField = (control) => {
            const field = control.closest(".field");
            const value = control.value.trim();
            let valid = true;

            if (control.required && !value) valid = false;
            if (valid && control.type === "email") valid = validators.email(value);
            if (valid && control.type === "tel") valid = validators.phone(value);

            field?.classList.toggle("error", !valid);
            return valid;
        };

        const controls = Array.from(form.querySelectorAll("input, textarea"));

        controls.forEach((control) => {
            control.addEventListener("input", () => {
                if (control.closest(".field")?.classList.contains("error")) {
                    validateField(control);
                }
            });

            control.addEventListener("blur", () => validateField(control));
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const valid = controls.map(validateField).every(Boolean);
            if (!valid) {
                setStatus("Please check the highlighted fields.", "error");
                form.querySelector(".field.error input, .field.error textarea")?.focus();
                return;
            }

            setStatus("Message validated. Thank you for reaching out.", "success");

            if (window.gsap && !prefersReducedMotion) {
                gsap.fromTo(
                    ".submit-btn",
                    { scale: 0.96 },
                    { scale: 1, duration: 0.55, ease: "elastic.out(1, 0.4)" }
                );
            }

            form.reset();
            window.setTimeout(() => setStatus(""), 4200);
        });
    }

    function initHeroParallax() {
        if (!finePointer || prefersReducedMotion || !window.gsap) return;

        const hero = document.querySelector(".hero");
        const copy = document.querySelector(".hero-copy");
        const visual = document.querySelector(".hero-visual");
        if (!hero || !copy || !visual) return;

        hero.addEventListener(
            "pointermove",
            (event) => {
                const rect = hero.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                gsap.to(copy, {
                    x: x * -18,
                    y: y * -12,
                    duration: 1.1,
                    ease: "power3.out"
                });

                gsap.to(visual, {
                    x: x * 28,
                    y: y * 22,
                    rotateY: x * 6,
                    rotateX: y * -5,
                    duration: 1.1,
                    ease: "power3.out"
                });
            },
            { passive: true }
        );

        hero.addEventListener("pointerleave", () => {
            gsap.to([copy, visual], {
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }
})();
