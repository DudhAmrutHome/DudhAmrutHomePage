
        document.addEventListener("DOMContentLoaded", () => {
          const featureSection = document.getElementById("features");
          const featureCards = featureSection
            ? Array.from(featureSection.querySelectorAll(".feature-activate"))
            : [];
          if (!featureCards.length) return;

          const revealFeatures = () => {
            featureCards.forEach((card, index) => {
              window.setTimeout(
                () => card.classList.add("is-active"),
                index * 120,
              );
            });
          };

          if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
          ) {
            revealFeatures();
            return;
          }

          const observer = new IntersectionObserver(
            (entries) => {
              if (!entries.some((entry) => entry.isIntersecting)) return;
              observer.disconnect();
              revealFeatures();
            },
            { threshold: 0.18 },
          );
          observer.observe(featureSection);
        });
      


      document.querySelectorAll("#team .team-card").forEach((card) => {
        const details = {
          "Shubham Salunke": [
            "shubham-salunke.jpg",
            "Shubham Salunke - Founder & Team Lead, DudhAmrut",
            "emerald",
          ],
          "Dhiraj Gaikwad": [
            "dhiraj-gaikwad.jpg",
            "Dhiraj Gaikwad - Platform Development & Finance, DudhAmrut",
            "green",
          ],
          "Sakshi Bhosale": [
            "sakshi-bhosale.jpg",
            "Sakshi Bhosale - Product Development, DudhAmrut",
            "purple",
          ],
          "Pratiksha Mane": [
            "pratiksha-mane.jpg",
            "Pratiksha Mane - Business & Stakeholder Engagement, DudhAmrut",
            "orange",
          ],
          "Shital Yadav": [
            "shital-yadav.jpg",
            "Shital Yadav - Operations & Quality Validation, DudhAmrut",
            "teal",
          ],
          "Dr. Neeta Doshi": [
            "dr-neeta-doshi.jpg",
            "Dr. Neeta Doshi - Strategic Mentor, DudhAmrut",
            "emerald",
          ],
        };
        const name = card.querySelector("h3")?.textContent.trim();
        if (!details[name]) return;
        const [fileName, alt, color] = details[name];
        const photo = card.querySelector(".w-20");
        const mentor = name === "Dr. Neeta Doshi";
        photo.className = `${mentor ? "w-28 h-28" : "w-24 h-24"} rounded-full mx-auto mb-4 overflow-hidden border-4 ${mentor ? "border-white" : `border-${color}-200`} shadow-lg`;
        photo.innerHTML = `<img src="images/team/${fileName}" alt="${alt}" class="w-full h-full object-cover object-top" loading="lazy" onerror="this.remove();this.parentElement.classList.add('bg-${color}-100','flex','items-center','justify-center');this.parentElement.innerHTML='&lt;span class=&quot;text-${color}-400 text-2xl&quot;&gt;&#9786;&lt;/span&gt;'">`;
      });
      document.querySelectorAll("#team .team-card img").forEach((image) => {
        image.onerror = function () {
          const color =
            ["green", "purple", "orange", "teal"].find((item) =>
              this.parentElement.classList.contains(`border-${item}-200`),
            ) || "sky";
          this.remove();
          this.parentElement.classList.add(
            `bg-${color}-100`,
            "flex",
            "items-center",
            "justify-center",
          );
          this.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-${color}-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`;
        };
      });
    


      (() => {
        const header = document.getElementById("header");
        const menuButton = document.querySelector(".mobile-menu-toggle");
        const mobileNav = document.getElementById("mobileNav");

        const updateHeader = () =>
          header && header.classList.toggle("is-scrolled", window.scrollY > 18);
        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });

        const syncMenuIcon = (isOpen) => {
          if (!menuButton) return;
          menuButton.setAttribute("aria-expanded", String(isOpen));
          menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation",
          );
          menuButton.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" class="w-5 h-5"></i>`;
          if (window.lucide) lucide.createIcons();
        };

        if (menuButton && mobileNav) {
          menuButton.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("is-open");
            syncMenuIcon(isOpen);
          });

          mobileNav.querySelectorAll("a").forEach((link) =>
            link.addEventListener("click", () => {
              mobileNav.classList.remove("is-open");
              syncMenuIcon(false);
            }),
          );

          window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
              mobileNav.classList.remove("is-open");
              syncMenuIcon(false);
            }
          });
        }

        const navAnchors = document.querySelectorAll(
          'header a[href^="#"], .mobile-nav a[href^="#"]',
        );

        navAnchors.forEach((link) => {
          link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const headerHeight = header ? header.offsetHeight : 0;
            const top = target.offsetTop - headerHeight - 8;

            window.scrollTo({
              top,
              behavior: "smooth",
            });
          });
        });
      })();
    


      document.addEventListener("DOMContentLoaded", () => {
        // Initialize Lucide Icons
        lucide.createIcons();

        // Initialize AOS (Animate on Scroll)
        AOS.init({
          duration: 900,
          once: true,
          offset: 40,
          easing: "ease-out-cubic",
          delay: 50,
        });

        const network = document.getElementById("problemNetwork");
        if (network) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  network.classList.add("is-visible");
                  observer.disconnect();
                }
              });
            },
            { threshold: 0.25 },
          );
          observer.observe(network);
        }

        const problemData = {
          adulteration: {
            title: "Rampant Adulteration",
            text: "68% of samples are unsafe (FSSAI, 2022). This directly threatens public health and consumer trust.",
            tone: "coral",
            icon: "shield-check",
            rgb: "239 124 119",
            points: [
              "Adulteration can distort reported milk quality.",
              "Common adulterants can compromise milk safety.",
              "Poor detection can affect consumer confidence.",
            ],
            impact: "Unsafe milk • Health risks • Loss of trust",
          },
          traceability: {
            title: "No Traceability",
            text: "The origin of contamination is untraceable in the current opaque supply chain, making recalls difficult.",
            tone: "blue",
            icon: "search",
            rgb: "125 181 230",
            points: [
              "Limited visibility across the supply chain.",
              "Difficult to identify the source of contamination.",
              "Delayed response to quality incidents.",
            ],
            impact:
              "Limited visibility • Difficult recalls • Lower accountability",
          },
          spoilage: {
            title: "High Spoilage",
            text: "~20% of milk is wasted due to poor cold chain management and lack of real-time temperature monitoring.",
            tone: "green",
            icon: "trash-2",
            rgb: "131 196 153",
            points: [
              "Temperature changes may go unnoticed.",
              "Poor cold-chain visibility increases spoilage risk.",
              "Manual monitoring can delay intervention.",
            ],
            impact: "Milk wastage • Higher losses • Inefficient cold chain",
          },
          health: {
            title: "Major Health Risks",
            text: "Poor milk quality and inadequate monitoring can create significant consumer health risks.",
            tone: "pink",
            icon: "heart-pulse",
            rgb: "232 150 180",
            points: [
              "Contaminated milk can affect consumer safety.",
              "Delayed detection increases exposure risk.",
              "Quality control is essential throughout the supply chain.",
            ],
            impact: "Consumer safety • Quality assurance • Early detection",
          },
          fssai: {
            title: "Low FSSAI Compliance",
            text: "Dairies struggle with manual, paper-based tracking required for traceability and compliance processes.",
            tone: "amber",
            icon: "file-text",
            rgb: "231 190 117",
            points: [
              "Manual records are difficult to maintain.",
              "Data can be fragmented across locations.",
              "Compliance reporting requires additional effort.",
            ],
            impact: "Digital records • Better traceability • Easier compliance",
          },
          distrust: {
            title: "Consumer Distrust",
            text: "Consumers have limited access to verified quality data, reducing confidence in packaged milk.",
            tone: "purple",
            icon: "eye-off",
            rgb: "190 162 226",
            points: [
              "Consumers cannot easily verify milk quality.",
              "Limited transparency affects confidence.",
              "Verified information can improve trust.",
            ],
            impact: "Transparency • Verification • Consumer confidence",
          },
        };

        const nodes = document.querySelectorAll(".problem-node");
        const detailCard = document.getElementById("problemDetailCard");
        const detailTitle = detailCard.querySelector(".problem-detail-title");
        const detailText = detailCard.querySelector(".problem-detail-text");
        const detailIcon = detailCard.querySelector(".detail-icon");
        const detailPoints = detailCard.querySelector(".problem-detail-points");
        const detailImpact = detailCard.querySelector(".problem-detail-impact");
        const problemCore = document.getElementById("problemCore");
        const networkParticle = document.querySelector(".network-particle");

        function scheduleNodeRing(radius) {
          nodes.forEach((node) => {
            const cs = getComputedStyle(node);
            const x0 = parseFloat(cs.getPropertyValue("--x")) || 0;
            const y0 = parseFloat(cs.getPropertyValue("--y")) || 0;
            const r0 = Math.hypot(x0, y0);
            if (!r0) return;
            const k = radius / r0;
            const x1 = x0 * k;
            const y1 = y0 * k;
            node.style.setProperty("--x", `${x1.toFixed(1)}px`);
            node.style.setProperty("--y", `${y1.toFixed(1)}px`);
            if (node.animate) {
              node.animate(
                [
                  {
                    transform: `translate(calc(-50% + ${x0}px), calc(-50% + ${y0}px)) scale(1)`,
                  },
                  {
                    transform: `translate(calc(-50% + ${x1}px), calc(-50% + ${y1}px)) scale(1)`,
                  },
                ],
                {
                  duration: 600,
                  easing: "cubic-bezier(.22, 1, .36, 1)",
                  fill: "both",
                },
              );
            }
          });
        }

        function setProblem(nodeKey) {
          const item = problemData[nodeKey];
          if (!item) return;

          network.classList.add("is-expanded");
          scheduleNodeRing(232);

          nodes.forEach((node) => {
            const active = node.dataset.node === nodeKey;
            node.classList.toggle("is-active", active);
            node.setAttribute("aria-pressed", String(active));
            const line = document.querySelector(
              `.network-connection[data-node="${node.dataset.node}"]`,
            );
            if (line) line.classList.toggle("is-active", active);
          });

          const selectedNode = document.querySelector(
            `.problem-node[data-node="${nodeKey}"]`,
          );
          if (networkParticle && selectedNode && networkParticle.animate) {
            const networkBox = network.getBoundingClientRect();
            const nodeBox = selectedNode.getBoundingClientRect();
            const coreBox = problemCore.getBoundingClientRect();
            const startX =
              nodeBox.left - networkBox.left + nodeBox.width / 2 - 5;
            const startY =
              nodeBox.top - networkBox.top + nodeBox.height / 2 - 5;
            const endX = coreBox.left - networkBox.left + coreBox.width / 2 - 5;
            const endY = coreBox.top - networkBox.top + coreBox.height / 2 - 5;
            networkParticle.animate(
              [
                { left: `${startX}px`, top: `${startY}px`, opacity: 0 },
                {
                  left: `${startX}px`,
                  top: `${startY}px`,
                  opacity: 1,
                  offset: 0.12,
                },
                {
                  left: `${endX}px`,
                  top: `${endY}px`,
                  opacity: 0.9,
                  offset: 0.82,
                },
                { left: `${endX}px`, top: `${endY}px`, opacity: 0 },
              ],
              { duration: 720, easing: "cubic-bezier(.22, 1, .36, 1)" },
            );
          }

          detailCard.classList.remove("is-showing");
          detailCard.classList.add("is-hiding");
          problemCore.classList.add("is-selected");

          setTimeout(() => {
            detailCard.dataset.tone = item.tone;
            detailTitle.textContent = item.title;
            detailText.textContent = item.text;
            detailIcon.innerHTML = `<i data-lucide="${item.icon}"></i>`;
            detailPoints.innerHTML = item.points
              .map((point) => `<li>${point}</li>`)
              .join("");
            detailImpact.textContent = item.impact;
            detailCard.style.setProperty("--detail-tone-rgb", item.rgb);
            lucide.createIcons();
            detailCard.classList.remove("is-hiding");
            detailCard.classList.add("is-showing");
          }, 160);
        }

        nodes.forEach((node) => {
          node.addEventListener("click", () => setProblem(node.dataset.node));
        });

        // Problem cards are intentionally static and always visible.
        // Counter Animation Logic
        const animateCounter = (el) => {
          const finalValue = parseFloat(el.getAttribute("data-counter"));
          const isFloat = finalValue % 1 !== 0;
          const suffix = el.getAttribute("data-suffix") || "";
          const format = (value) =>
            (isFloat ? value.toFixed(1) : value.toLocaleString("en-IN")) +
            suffix;
          const duration = 1500;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );
            const currentValue = progress * finalValue;

            el.textContent = format(
              isFloat ? currentValue : Math.floor(currentValue),
            );

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        };

        // Setup Intersection Observer for counters
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const counterElements =
                  entry.target.querySelectorAll("[data-counter]");
                counterElements.forEach(animateCounter);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 },
        );

        // Observe the impact section
        const impactSection = document.getElementById("impact");
        if (impactSection) {
          observer.observe(impactSection);
        }

        // Our Journey: reveal one milestone at a time as the reader progresses.
        const journeyTimeline = document.querySelector(
          ".journey-timeline:not(.journey-timeline--legacy)",
        );
        const journeyItems = journeyTimeline
          ? Array.from(journeyTimeline.querySelectorAll("[data-journey-index]"))
          : [];
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (journeyTimeline && journeyItems.length) {
          if (reducedMotion) {
            journeyTimeline.style.setProperty("--journey-progress", "1");
          } else {
            let nextJourneyIndex = 0;
            let isRevealingJourneyItem = false;
            let nextItemObserver;

            const armNextJourneyItem = () => {
              if (nextJourneyIndex >= journeyItems.length) return;

              const nextItem = journeyItems[nextJourneyIndex];
              nextItemObserver = new IntersectionObserver(
                (entries) => {
                  if (
                    !entries.some((entry) => entry.isIntersecting) ||
                    isRevealingJourneyItem
                  )
                    return;
                  nextItemObserver.disconnect();
                  isRevealingJourneyItem = true;
                  nextItem.classList.add("is-visible");
                  journeyTimeline.style.setProperty(
                    "--journey-progress",
                    String((nextJourneyIndex + 1) / journeyItems.length),
                  );
                  nextJourneyIndex += 1;

                  window.setTimeout(() => {
                    isRevealingJourneyItem = false;
                    armNextJourneyItem();
                  }, 800);
                },
                { threshold: 0.25 },
              );

              nextItemObserver.observe(nextItem);
            };

            const startJourney = new IntersectionObserver(
              (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                startJourney.disconnect();
                armNextJourneyItem();
              },
              { threshold: 0.01 },
            );

            startJourney.observe(journeyTimeline);
          }
        }

        // (intentionally left no touch/hover pause — marquee runs continuously)
      });

      // ============================================================
      // PREMIUM INTERACTIONS — reading progress + scroll-spy nav
      // ============================================================
      (() => {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        /* Reading progress bar */
        const bar = document.createElement("div");
        bar.id = "reading-progress";
        document.body.appendChild(bar);

        const updateProgress = () => {
          const max =
            document.documentElement.scrollHeight - window.innerHeight;
          const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
          bar.style.width = pct.toFixed(2) + "%";
        };
        updateProgress();
        if (reducedMotion) {
          window.addEventListener("scroll", updateProgress, { passive: true });
        } else {
          let ticking = false;
          window.addEventListener(
            "scroll",
            () => {
              if (!ticking) {
                window.requestAnimationFrame(() => {
                  updateProgress();
                  ticking = false;
                });
                ticking = true;
              }
            },
            { passive: true },
          );
        }

        /* Scroll-spy: highlight the nav item of the section in view */
        const navLinks = document.querySelectorAll(
          "header#header nav a, .mobile-nav a",
        );
        const spySections = Array.from(
          document.querySelectorAll("section[id]"),
        );
        if (navLinks.length && spySections.length) {
          const spy = () => {
            const pos = window.scrollY + 140;
            let current = "";
            for (const section of spySections) {
              if (section.offsetTop <= pos) current = section.id;
            }
            const activeTarget = current ? "#" + current : "";
            navLinks.forEach((link) => {
              const isActive =
                activeTarget && link.getAttribute("href") === activeTarget;
              link.classList.toggle("nav-active", isActive);
              if (isActive && link.tagName === "A") {
                link.setAttribute("aria-current", "page");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          };
          spy();
          window.addEventListener("scroll", spy, { passive: true });
        }
      })();
    