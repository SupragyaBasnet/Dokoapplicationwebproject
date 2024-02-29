package com.dsa.springrestauth.controller;

import com.dsa.springrestauth.entity.OrderEntity;
import com.dsa.springrestauth.entity.OrderItemsEntity;
import com.dsa.springrestauth.model.DokoResponse;
import com.dsa.springrestauth.model.OrderRequest;
import com.dsa.springrestauth.model.interfaces.ResponseObjectsInterface;
import com.dsa.springrestauth.repository.OrderItemsRepository;
import com.dsa.springrestauth.repository.OrderRepository;
import com.dsa.springrestauth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class OrdersController {

    private DokoResponse dokoResponse;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    @Autowired
    private UserService userService;

    public OrdersController(){
        this.dokoResponse = new DokoResponse();
    }

    @GetMapping("/user/orders")
    public ResponseEntity<DokoResponse> getAllOrders(){
        List<ResponseObjectsInterface> orderList = new ArrayList<>();
        Iterable<OrderEntity> orders = orderRepository.findAll();

        for (OrderEntity orderEntity:orders) {
            orderList.add(orderEntity);
        }

        dokoResponse.setResponse(
                HttpStatus.OK,
                orderList.isEmpty()?"No orders found.":"Found List of orders.",
                null,
                orderList,
                null
        );
        return ResponseEntity.ok(dokoResponse);
    }

    @PostMapping("/admin/orders")
    public ResponseEntity<DokoResponse> addOrder(
            @RequestBody @Validated OrderRequest orderRequest) {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setShipping(orderRequest.getShipping());
        orderEntity.setDeliveryDate(orderRequest.getDeliveryDate());
        orderEntity.setAddress(orderRequest.getAddress());
        List<OrderItemsEntity> orderItemsEntities = new ArrayList<>();
        orderEntity.setUser(userService.getCurrentUser().get());
        orderRepository.save(orderEntity);
        orderRequest.getOrderItems().forEach(orderItemsRequest -> {
            OrderItemsEntity orderItemsEntity = new OrderItemsEntity();
            orderItemsEntity.setCustomer_order(orderEntity);
            orderItemsEntity.setName(orderItemsRequest.getName());
            orderItemsEntity.setPrice(orderItemsRequest.getPrice());
            orderItemsEntity.setQuantity(orderItemsRequest.getQuantity());
            orderItemsEntity.setImageName(orderItemsRequest.getImageName());
            orderItemsRepository.save(orderItemsEntity);
            orderItemsEntities.add(orderItemsEntity);
        });
        orderEntity.setOrderItems(orderItemsEntities);
        dokoResponse.setResponse(
                HttpStatus.OK,
                "Item saved successfully.",
                orderEntity,
                null,
                null
        );
        return ResponseEntity.ok(dokoResponse);
    }
}
