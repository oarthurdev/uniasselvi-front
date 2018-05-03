<template>
<div>
<section class="content-header">
    <h1>
    Search Logs
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active">Search Logs</li>
    </ol>
</section>
<section class="content">
<div class="box box-primary" data-widget="box-widget">
        <div class="box-header">
            <h3 class="box-title">Procurar</h3>
        </div>
        <form name="formProcurarLogs" id="formProcurarLogs">
        <div class="box-body">
            <div class="form-group">
                <label for="procurarPor">Categoria</label>
                <select class="form-control" id="procurarPor" required>
                <option value="LogAdmin">Log Admin</option>
                <option value="LogDebug">Log Debug</option>
                <option value="LogFile">Log File</option>
                <option value="LogItem">Log de Item</option>
                </select>
            </div>
            <div class="form-group">
                <label for="procurarPor2">Procurar por</label>
                <select class="form-control" id="procurarPor2" required>
                <option>Account Name</option>
                <option>Char Name</option>
                <option>IP Address</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" id="SearchFor1" name="SearchFor1" class="form-control" placeholder="Ex: gothicpt"/>
            </div>
            <div class="form-group">
            <label>Date</label>

            <div class="input-group date">
                <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
                </div>
                <input type="date" class="form-control pull-right" id="datepicker">
            </div>
            
            <!-- /.input group -->
            </div>
            <div class="form-group">
                <button type="submit" class="form-control btn-primary "><font size="3px" style="padding-right: 3px;">Search</font>&nbsp;<i class="fa fa-search" style="font-size:20px"></i></button>
            </div>
          </div>
         </form>
         <div class="alert alert-danger uspass-wrong mgtp-5px" name="alert-wrong" id="alert-wrong" role="alert">
            <p class="color-black">Nenhum resultado.</p>
        </div>
      </div>
      <div class="box box-warning" data-widget="box-widget">
            <div class="box-header">
                <h3 class="box-title">Resultados</h3>
            </div>
            <div class="box-body">
            <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Account</th>
                <th>CharacterName</th>
                <th>IP</th>
                <th>ItemChecksum1</th>
                <th>ItemChecksum2</th>
                <th>LogType</th>
                <th>Log</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <th class="name"></th>
                <td class="nick"></td>
                <td class="ip"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        
    </div>
</section>
</div>
</template>
