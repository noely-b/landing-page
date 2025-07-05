document.getElementById('CTA-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newHeadline = document.getElementById('new-headline').value;
    document.getElementById('CTA-headline').textContent = newHeadline;
    this.reset();
});