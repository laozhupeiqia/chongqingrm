// 政务公开部分的新闻
		$(".gkl2,.gkl3").hide(1)
		$(".line2,.line3").hide(1)//隐藏下划线和其它样式
		$(".gkzc").hover(function(){
			$(".gkl1").show(1)
			$(".gkzc>a").css("color","#cccccc");//鼠标经过改变颜色
			$(".gkjd>a,.gkgq>a").css("color","black");//改变另外两个标签的颜色
			$(".line2,.line3").hide(1)
			$(".line1").show(1)//隐藏其它下划线
			$(".gkl2,.gkl3").hide(1)
				})
				// $(".gkzc").mouseout(function(){
				// 	$(".gkzc>a").css("color","black");//鼠标移出改变颜色
				// 		})			
						
				$(".gkjd").hover(function(){
					$(".gkl2").show(1)
					$(".gkjd>a").css("color","#cccccc");//鼠标经过改变颜色
					$(".gkzc>a,.gkgq>a").css("color","black");//改变另外两个标签的颜色
					$(".line3,.line1").hide(1)
					$(".line2").show(1)//隐藏其它下划线
					$(".gkl1,.gkl3").hide(1)
						})
						
						$(".gkgq").hover(function(){
							$(".gkl3").show(1)
							$(".gkgq>a").css("color","#cccccc");//鼠标经过改变颜色
							$(".gkzc>a,.gkjd>a").css("color","black");//改变另外两个标签的颜色
							$(".line2,.line1").hide(1)
							$(".line3").show(1)//隐藏其它下划线
							$(".gkl1,.gkl2").hide(1)
								})
	// 主题教育部分新闻							
	$(".gwyxx2").hide(1)
	$(".line5").hide(1)//隐藏下划线和其它样式
	$(".gwyxx").hover(function(){
		$(".gwyxx1").show(1)
		$(".gwyxx>a").css("color","#cccccc");//鼠标经过改变颜色
		$(".zwhd>a").css("color","black");//改变另外两个标签的颜色
		$(".line5").hide(1)
		$(".line4").show(1)//隐藏其它下划线
		$(".gwyxx2").hide(1)
			})
			$(".zwhd").hover(function(){
				$(".gwyxx2").show(1)
				$(".zwhd>a").css("color","#cccccc");//鼠标经过改变颜色
				$(".gwyxx>a").css("color","black");//改变另外两个标签的颜色
				$(".line4").hide(1)
				$(".line5").show(1)//隐藏其它下划线
				$(".gwyxx1").hide(1)
					})							
// 第一个轮播图部分
		class Swiper {
			constructor() {
				this.w = $('.swiper-item').width();
				this.num = 0;
				this.len = $('.swiper .swiper-item').length - 1;
				this.timer = null;
			}
			init() {
				//设置定时器
				this.setTime();
				//滑上停止定时器
				this.hover();
				//点击指示
				this.pointClick();
				//点击左右箭头
				this.lrClick();
			}
			setTime() {
				this.timer = setInterval(() => {
					this.num++;	
					if (this.num > this.len) {
						this.num = 0;
					}
					let cssTrx = -this.num * this.w;
					$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
					$('.swiper').css({transform: `translateX(${cssTrx}px)`})
				}, 3000)
			}
			hover() {
				$('.jrcq_l').hover(() => {
					clearInterval(this.timer)
				}, () => {
					this.setTime();
				});
			}
			pointClick() {
				let that = this;
				$('.swiper-point-item .point').click(function() {
					that.num = $(this).index();
					let cssTrx = -that.num * that.w;
					$(this).addClass('active').siblings().removeClass('active');
					$('.swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				})
			}
			lrClick() {
				$('.swiper-left img').click(() => {
					this.num--;
					if (this.num < 0) {
						this.num = this.len;
					};
					console.log(this.num)
					let cssTrx = -this.num * this.w;
					$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
					$('.swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				});
				
				$('.swiper-right img').click(() => {
					this.num++;
					if (this.num > this.len) {
						this.num = 0;
					}
					let cssTrx = -this.num * this.w;
					$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
					$('.swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				})
			}
		}
		let sw = new Swiper();
		sw.init();
// 第二个轮播图
		class zwlb_swiper {
			constructor() {
				this.w2 = $('.zwlb_swiper-item').width();
				this.num2 = 0;
				this.len2 = $('.zwlb_swiper .zwlb_swiper-item').length - 1;
				this.timer2 = null;
			}
			init() {
				//设置定时器
				this.setTime();
				//滑上停止定时器
				this.hover();
				//点击指示
				this.pointClick();
				//点击左右箭头
				this.lrClick();
			}
			setTime() {
				this.timer = setInterval(() => {
					this.num++;	
					if (this.num2 > this.len) {
						this.num2 = 0;
					}
					let cssTrx = -this.num2 * this.w2;
					$('.zwlb_swiper-point-item .point').eq(this.num2).addClass('active').siblings().removeClass('active');
					$('.zwlb_swiper').css({transform: `translateX(${cssTrx}px)`})
				}, 3000)
			}
			hover() {
				$('.zwlb').hover(() => {
					clearInterval(this.timer2)
				}, () => {
					this.setTime();
				});
			}
			pointClick() {
				let that = this;
				$('.zwlb_swiper-point-item .point').click(function() {
					that.num2 = $(this).index();
					let cssTrx = -that.num2 * that.w2;
					$(this).addClass('active').siblings().removeClass('active');
					$('.zwlb_swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				})
			}
			lrClick() {
				$('.zwlb_swiper-left img').click(() => {
					this.num2--;
					if (this.num2 < 0) {
						this.num2 = this.len2;
					};
					console.log(this.num2)
					let cssTrx = -this.num2 * this.w2;
					$('.zwlb_swiper-point-item .point').eq(this.num2).addClass('active').siblings().removeClass('active');
					$('.zwlb_swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				});
				
				$('.zwlb_swiper-right img').click(() => {
					this.num2++;
					if (this.num2 > this.len2) {
						this.num2 = 0;
					}
					let cssTrx = -this.num2 * this.w2;
					$('.zwlb_swiper-point-item .point').eq(this.num2).addClass('active').siblings().removeClass('active');
					$('.zwlb_swiper').css({
						transform: `translateX(${cssTrx}px)`
					})
				})
			}
		}
		let sw2= new zwlb_swiper();
		sw2.init();
// 二级菜单样式
$(".erji1,.erji2,.erji3,.erji4,.erji5,.erji6,.erji7,.erji8").hide(1)
		$(".erji11").click(function(){
			$(".erji2,.erji3,.erji4,.erji5,.erji6,.erji7,.erji8").hide(1)
			$(".erji1").show(1)
			$(".bqsn>div:not(.erji11,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
			$(".erji11").css("background-color","white")
			})
			
			$(".erji22").click(function(){
				$(".erji1,.erji3,.erji4,.erji5,.erji6,.erji7,.erji8").hide(1)
				$(".erji2").show(1)
				$(".bqsn>div:not(.erji22,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
				$(".erji22").css("background-color","white")
				})
				
				$(".erji33").click(function(){
					$(".erji1,.erji2,.erji4,.erji5,.erji6,.erji7,.erji8").hide(1)
					$(".erji3").show(1)
					$(".bqsn>div:not(.erji33,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
					$(".erji33").css("background-color","white")
					})
					
					$(".erji44").click(function(){
						$(".erji1,.erji2,.erji3,.erji5,.erji6,.erji7,.erji8").hide(1)
						$(".erji4").show(1)
						$(".bqsn>div:not(.erji44,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
						$(".erji44").css("background-color","white")
						})
						
						$(".erji55").click(function(){
							$(".erji1,.erji2,.erji3,.erji4,.erji6,.erji7,.erji8").hide(1)
							$(".erji5").show(1)
							$(".bqsn>div:not(.erji55,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
							$(".erji55").css("background-color","white")
							})
							
							$(".erji66").click(function(){
								$(".erji1,.erji2,.erji3,.erji4,.erji5,.erji7,.erji8").hide(1)
								$(".erji6").show(1)
								$(".bqsn>div:not(.erji66,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
								$(".erji66").css("background-color","white")
								})
								
								$(".erji77").click(function(){
									$(".erji1,.erji2,.erji3,.erji4,.erji5,.erji6,.erji8").hide(1)
									$(".erji7").show(1)
									$(".bqsn>div:not(.erji77,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
									$(".erji77").css("background-color","white")
									})
									
									$(".erji88").click(function(){
										$(".erji1,.erji2,.erji3,.erji4,.erji5,.erji6,.erji7").hide(1)
										$(".erji8").show(1)
										$(".bqsn>div:not(.erji88,.bqs,.bqsn)").css("background-color","transparent")//点击其它按钮清除原来div的背景颜色
										$(".erji88").css("background-color","white")
										})
		// 全局鼠标点击事件
		$("div:not(.erji11,.erji22,.erji33,.erji44,.erji55,.erji66,.erji77,.erji88,.bqs,.bqsn)").click(function(){//因为事件会向下冒泡所以添加了.bqs,.bqsn
			 $(".erji1,.erji2,.erji3,.erji4,.erji5,.erji6,.erji7,.erji8").hide(1)
			 $(".erji11,.erji22,.erji33,.erji44,.erji55,.erji66,.erji77,.erji88").css("background-color","transparent")
		})