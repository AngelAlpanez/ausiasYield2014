<script type="text/javascript">
        $(document).ready(function () {
            $("#uploadForm").submit(function () {
                var form = document.getElementById('uploadForm');
                //$("#spinner").append('<img src="spinner.gif"></div>').fadeIn(1000);

                this.timer = setTimeout(function () {
                    $.ajax({
                        url: 'upload',
                        processData: false,
                        contentType: false,
                        enctype: 'multipart/form-data',
                        mimeType:"multipart/form-data",
                        data: new FormData(form), 
                        //data: 'filename=' + $('#file').val(),
                        type: 'post',
                        success: function (msg) {
                            //$("#spinner").fadeOut(1000);
                            $("#spinner").empty().append(msg);
                        }

                    });
                }, 200);
                return false;
            });

        });

    </script>



    
        <h1>JUploading ajax: upload files to the server example</h1>
        <div>
            <h3>Choose File to Upload in Server </h3>
            <form id="uploadForm" action="upload" method="post" enctype="multipart/form-data">
                <input type="hidden" id="id" class="form-control"  name="id" placeholder="id" />
                
                <input type="file" name="file" id="file"/><br/><br/>
                
                <input type="submit" value="upload file" /><br/>
            </form>          
            <div id="spinner"></div>
        </div>