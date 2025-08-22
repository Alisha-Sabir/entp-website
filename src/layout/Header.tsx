import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Col,
  Row,
  Card,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

interface HeaderProps {
  background?: string;
}

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  // Mouse hover effect
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleDropdown = (modalIsOpen: boolean) => {
    // debugger;;
    setIsOpen(modalIsOpen);
  };

  const router = useRouter();

  // Offcanvas
  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  // Modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNavigation = (href: string) => {
    // Forcefully close dropdown before routing
    setIsOpen(false); // Close NavDropdown
    handleClose(); // Close offcanvas if open

    // Small delay to let Bootstrap unmount dropdown cleanly
    setTimeout(() => {
      const isHomePage = router.pathname === "/";
      if (href.startsWith("#")) {
        if (isHomePage) {
          const elementId = href.replace("#", "");
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          router.push(`/${href}`);
        }
      } else {
        router.push(href);
      }
    }, 100); // <- allow Bootstrap dropdown DOM cleanup before navigation
  };

  const handleHomeNavigation = (url: any) => {
    setIsOpen(false);
    handleClose();
    router.push(url);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setShowOffcanvas(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <section style={{ backgroundColor: "#35342d" }}>
      <Container>
        <header>
          <Navbar
            collapseOnSelect
            expand="xl"
            className="nav-links"
            style={{
              color: "black",
              zIndex: 100,
            }}
          >
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center p-0 m-0"
            >
              <Image
                src="/images/entp_white_logo.png"
                alt="Entterprice logo"
                height={90}
                width={170}
                quality={100}
                onClick={() => handleHomeNavigation("/")}
                className="img-fluid"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="mx-auto text-start text-xl-center gap-2 gap-xl-0 gap-xl-1">
                <Nav.Link
                  onClick={() => router.push("/about-us")}
                  className={`nav-links px-xl-3 ${
                    router.pathname === "/about-us"
                      ? "active-link"
                      : "text-white"
                  }`}
                >
                  About
                </Nav.Link>
                <div className="glow-line d-none d-xl-block"></div>
                <Nav.Link
                  onClick={() => router.push("/services")}
                  className={`nav-links px-xl-3 ${
                    router.pathname === "/services"
                      ? "active-link"
                      : "text-white"
                  }`}
                >
                  Services
                </Nav.Link>
                <div className="glow-line d-none d-xl-block"></div>

                <Nav.Link
                  onClick={() => router.push("/payout-&-collection")}
                  className={`nav-links px-xl-3 ${
                    router.pathname === "/payout-&-collection"
                      ? "active-link"
                      : "text-white"
                  }`}
                >
                  Pay Out & Collection
                </Nav.Link>
                <div className="glow-line d-none d-xl-block"></div>

                <Nav.Link
                  onClick={() => router.push("/governance")}
                  className={`nav-links px-xl-3 ${
                    router.pathname === "/governance"
                      ? "active-link"
                      : "text-white"
                  }`}
                >
                  Governance
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto gap-3">
                <Nav.Link
                  // onClick={() => handleNavigation("/about-us")}
                  style={{ color: "#f8d613" }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  // onClick={() => handleNavigation("/contact-us")}
                  className="border-0 btn-yellow nav-links"
                >
                  Get Started
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Container>
    </section>
  );
};

export default Header;
