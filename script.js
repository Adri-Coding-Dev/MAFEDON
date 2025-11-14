// Navegación entre páginas
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            window.scrollTo(0, 0);
            
            // Cerrar menú móvil si está abierto
            const nav = document.getElementById('mainNav');
            nav.classList.remove('active');
        }

        // Toggle menú móvil
        function toggleMenu() {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('active');
        }

        // Validación y envío del formulario
        function handleSubmit(event) {
            event.preventDefault();
            
            // Limpiar mensajes de error previos
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.style.display = 'none');
            
            let isValid = true;
            
            // Validar nombre
            const nombre = document.getElementById('nombre');
            if (nombre.value.trim().length < 2) {
                document.getElementById('nombreError').style.display = 'block';
                isValid = false;
            }
            
            // Validar email
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validar teléfono
            const telefono = document.getElementById('telefono');
            const telefonoPattern = /^[0-9]{9,15}$/;
            if (!telefonoPattern.test(telefono.value.replace(/\s/g, ''))) {
                document.getElementById('telefonoError').style.display = 'block';
                isValid = false;
            }
            
            // Validar asunto
            const asunto = document.getElementById('asunto');
            if (asunto.value.trim().length < 3) {
                document.getElementById('asuntoError').style.display = 'block';
                isValid = false;
            }
            
            // Validar mensaje
            const mensaje = document.getElementById('mensaje');
            if (mensaje.value.trim().length < 5) {
                document.getElementById('mensajeError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Mostrar mensaje de éxito
                document.getElementById('successMessage').style.display = 'block';
                
                // Limpiar formulario
                document.getElementById('contactForm').reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
                
                // Aquí se enviaría el formulario al servidor
                console.log('Formulario enviado:', {
                    nombre: nombre.value,
                    email: email.value,
                    telefono: telefono.value,
                    empresa: document.getElementById('empresa').value,
                    asunto: asunto.value,
                    mensaje: mensaje.value
                });
            }
            
            return false;
        }

        // Cerrar menú móvil al hacer clic fuera
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('mainNav');
            const menu = document.querySelector('.mobile-menu');
            
            if (!nav.contains(event.target) && !menu.contains(event.target)) {
                nav.classList.remove('active');
            }
        });

        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });