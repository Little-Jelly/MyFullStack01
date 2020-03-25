package com.youyouba.missyou.api.v1;


import com.youyouba.missyou.service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/v1/banner")
public class BannerController {

    private final BannerService service;

    @Autowired
    public BannerController(BannerService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public String test(){
        service.print();
        return "Hello, 七月";
    }
}
