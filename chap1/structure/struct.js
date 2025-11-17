 // Fonction pour la démonstration interactive
        function runDemo() {
            const output = document.getElementById('demo-output');
            output.innerHTML = '';
            let num = prompt("Entrez un entier");
            
            // Simulation de l'exécution PHP
            let html = '<strong>Table de multiplication de 7:</strong><br>';
            
            for (let i = 1; i <= 10; i++) {
                const resultat = num * i;
                html += `${num} × ${i} = ${resultat}<br>`;
            }
            
            output.innerHTML = html;
        }