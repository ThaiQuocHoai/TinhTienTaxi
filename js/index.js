document.querySelector('#btnTinhTien').onclick = function(event){
    event.preventDefault();
    var CacLoaiXe = document.getElementsByName('selector');
    var loaiXe;
    for(var i=0; i< CacLoaiXe.length ; i++){
        if(CacLoaiXe[i].checked == true){
            loaiXe = CacLoaiXe[i].id;
        }
    }

    var soKm = document.querySelector('#soKM').value;
    var flag = 1;
    if(soKm == null || soKm!=null && soKm.length <1){
        document.querySelector('#soKM').placeholder = 'Vui Lòng nhập số km';
        flag = 0;
    } else if(Number(soKm) < 1){
        flag = 0;
        document.querySelector('#soKM').value = '';
        document.querySelector('#soKM').placeholder='Số km >= 1';
    }

    var thoigian = document.querySelector('#thoiGianCho').value;
    if(thoigian == null || thoigian!=null && thoigian.length <1){
        document.querySelector('#thoiGianCho').placeholder = 'Vui Lòng nhập thời gian';
        flag = 0;
    } else if(Number(thoigian) < 0){
        flag = 0;
        document.querySelector('#thoiGianCho').value = '';
        document.querySelector('#thoiGianCho').placeholder='Thời gian chờ >= 0';
    }

    if(flag === 0){
        return;
    }

    var tongThoiGian;
    var tongTien;
    switch(loaiXe){
        case 'uberX':{
            tongThoiGian = TinhThoiGian(2000, thoigian);
            tongTien = TinhTongTien(soKm, 8000, 12000, 10000);
        } break;
        case 'uberSUV':{
            tongThoiGian = TinhThoiGian(3000, thoigian);
            tongTien = TinhTongTien(soKm, 9000, 14000, 12000);
        } break;
        case 'uberBlack':{
            tongThoiGian = TinhThoiGian(4000, thoigian);
            tongTien = TinhTongTien(soKm, 10000, 16000, 14000);
        }break;
    }
     var total = tongThoiGian + tongTien;
    document.querySelector('#divThanhTien').style.display = 'inline-block';
    document.querySelector('#xuatTien').innerHTML = total;

}

document.querySelector('#btnInHoaDon').onclick = function(event){
    event.preventDefault();
    var CacLoaiXe = document.getElementsByName('selector');
    var loaiXe;
    for(var i=0; i< CacLoaiXe.length ; i++){
        if(CacLoaiXe[i].checked == true){
            loaiXe = CacLoaiXe[i].id;
        }
    }

    var soKm = document.querySelector('#soKM').value;
    var flag = 1;
    if(soKm == null || soKm!=null && soKm.length <1){
        flag = 0;
    } else if(Number(soKm) < 1){
        flag = 0;
    }

    var thoigian = document.querySelector('#thoiGianCho').value;
    if(thoigian == null || thoigian!=null && thoigian.length <1){
        flag = 0;
    } else if(Number(thoigian) < 0){
        flag = 0;
    }

    if(flag === 0){
        return;
    }

    var tongThoiGian;
    var tongTien;
    switch(loaiXe){
        case 'uberX':{
            tongThoiGian = TinhThoiGian(2000, thoigian);
            tongTien = TinhTongTien(soKm, 8000, 12000, 10000);
        } break;
        case 'uberSUV':{
            tongThoiGian = TinhThoiGian(3000, thoigian);
            tongTien = TinhTongTien(soKm, 9000, 14000, 12000);
        } break;
        case 'uberBlack':{
            tongThoiGian = TinhThoiGian(4000, thoigian);
            tongTien = TinhTongTien(soKm, 10000, 16000, 14000);
        }break;
    }
     var total = tongThoiGian + tongTien;
     document.querySelector('#txtSokm').innerHTML = soKm;
     var arr1 = document.querySelectorAll('#txtTongtien');
     for(var i=0; i< arr1.length; i++){
         arr1[i].innerHTML = tongTien;
     }
     document.querySelector('#txtThoigian').innerHTML = thoigian;
     var arr2 = document.querySelectorAll('#txtTongThoigian');
     for(var i=0; i< arr2.length; i++){
        arr2[i].innerHTML = tongThoiGian;
    }
     document.querySelector('#txtTotal').innerHTML = total;
}

function TinhThoiGian(gia, thoigian){
    return gia*thoigian;
}

function TinhTongTien(soKm ,gia1, gia2, gia3){
    var tongtien;
    if(soKm  <= 1){
        tongtien = gia1;
    } else if(soKm >1 && soKm <=20){
        tongtien = gia1 + (soKm-1)*gia2;
    } else if(soKm >20){
        tongtien = gia1 + 19*gia2 + (soKm-20)*gia3
    } else{
        return 0;
    }
    return tongtien;
}

